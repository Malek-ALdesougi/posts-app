import './style.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const NewPost = ({ editState, blogs }) => {
  const navigate = useNavigate();
  const refData = useRef({
    author: '',
    content: ''
  })

  // -------- REMEMBER ----------
  // puting the e.target.name in [] to generate a dynamic key for the object
  const handleInputs = (e) => {
    refData.current = {...refData.current, [e.target.name]: e.target.value }
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(refData.current), 
      'id' : 99,
    })
    
    
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <fieldset id="field">
          <h1 id="header">Add new Blog</h1>
          <label id="author" htmlFor="author">
            Author Name :
          </label>
          <input
            onChange={handleInputs}
            name="author"
            id="author"
            type="text"
            placeholder="Enter the Auther name"
          />

          <label htmlFor="content">Contnet :</label>
          <textarea
            onChange={handleInputs}
            name="content"
            type="text"
            placeholder="Post content"
          />

          <button type="submit">Add</button>
        </fieldset>
      </form>
    </div>
  );
};

export default NewPost;
