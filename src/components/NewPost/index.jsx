import { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

const NewPost = ({editState ,blogs}) => {

    const navigate = useNavigate();
    const [newPost, setNewPost] = useState({
        id : 0,
        author : '',
        content: ''
    });

    // -------- REMEMBER ---------- 
    // puting the e.target.name in [] to generate a dynamic key for the object
    const handleInputs = (e) => {
        setNewPost({...newPost, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        //get the id from the last element in the state of posts
        newPost.id = blogs[blogs.length -1].id + 1;
        editState(newPost);
        navigate('/');
    }



    return(
        <div className="container">
            <fieldset id='field'>

            <h1 id='header'>Add new Blog</h1>
            <label id="author" htmlFor="author">Author Name :</label>
            <input onChange={(e) => handleInputs(e)} name='author' id="author" type="text" placeholder="Enter the Auther name" />

            <label htmlFor="content">Contnet :</label>
            <textarea onChange={handleInputs} name='content' type='text' placeholder="Post content"/>

            <button onClick={handleSubmit}>Add</button>
            </fieldset>
        </div>
    )
}

export default NewPost;