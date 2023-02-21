import './App.css';
import NavBar from './components/navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import NewPost from './components/NewPost/index';
import SingleBlog from './components/SingleBlog';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search';
import Login from './components/Login';
// send this variable with use context 

// read the last object id in this variable

// add the new object to this variable 


// TODO: Login feature ----- edit post if the same name ------ protected routes 
// 

function App() {

  return (
    <div className='malek' style={{ width: '800px', margin: '0 auto' }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new-post' element={<NewPost/>} />
        <Route path='/single-blog/:id' element={<SingleBlog />}/>
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
