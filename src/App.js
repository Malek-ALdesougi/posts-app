import style from './app.module.css'
import NavBar from './components/navbar';
import { Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const MyHomeComponent = lazy(() => import('./components/Home'));
const NewPost = lazy(() => import('./components/NewPost/'));
const SingleBlog = lazy(() => import('./components/SingleBlog'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const Login = lazy(() => import('./components/Login'))

function App() {


  return (
    <div className={style.app}>
      <NavBar />
      <Suspense fallback={<div className={style.loading}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MyHomeComponent />}/>
          <Route path='/new-post' element={<NewPost />} />
          <Route path='/single-blog/:id' element={<SingleBlog />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
