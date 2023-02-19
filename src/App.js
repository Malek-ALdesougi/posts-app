import './App.css';
import NavBar from './components/navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import NewPost from './components/NewPost/index';
import { useEffect, useState } from 'react';
import useFetch from './components/Hooks/useFetch';
import SingleBlog from './components/SingleBlog';
import NotFound from './components/NotFound/NotFound';
// send this variable with use context 

// read the last object id in this variable

// add the new object to this variable 

function App() {
  const [allPosts, setAllPosts] = useState([])

  // functio nt pass to the sibling to be able to edit the state 
  const editState = (data) => {
    console.log(data);
    allPosts.push(data);
  }

  return (
    <div className='malek' style={{ width: '800px', margin: '0 auto' }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new-post' element={<NewPost blogs={allPosts} editState={editState} />} />
        <Route path='/single-blog/:id' element={<SingleBlog />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
