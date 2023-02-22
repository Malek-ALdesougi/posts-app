import style from './app.module.css'
import NavBar from './components/navbar';
import Home from './components/Home';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import NewPost from './components/NewPost/index';
import SingleBlog from './components/SingleBlog';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login';

function App() {

  return (
    <div className={style.app}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new-post' element={<NewPost/>} />
        <Route path='/single-blog/:id' element={<SingleBlog />}/>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
