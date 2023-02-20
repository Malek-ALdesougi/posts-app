import style from './style.module.css'
import useFetch from '../../Hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Home = () => {

    const { posts, loading, error } = useFetch('http://localhost:8000/posts');
    const searchRef = useRef('');
    const navigate = useNavigate();

    if (loading !== false) return;
    if (error) return;

    const handleSearchInputChnage = (e) => {
        searchRef.current = e.target.value ;
    }

    const handleSearchBtn = async () => {
      const data = await  fetch(`http://localhost:8000/posts/?q=${searchRef.current}`);
      const result = await data.json();

      navigate('search', { state: result });
    }

    return (

        <>
            <div className={style.container2}>
                <input onChange={handleSearchInputChnage} type={'text'} placeholder={'Search a Blog'}></input>
                <button onClick={handleSearchBtn} className='btn' type='button'>Search Blog</button>
            </div>

            {loading ? 'Loading ...' :
                <div className={style.homeContainer}>
                    <h1>All Blogs</h1>

                    {posts?.map((blog) => {
                        return (
                            <div className={style?.blogs} key={blog?.id}>
                                <h3>{blog?.author}</h3>
                                <Link to={`single-blog/${blog?.id}`} className={style.link}>
                                    <p>{blog?.content}</p>
                                </Link>
                                ------
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default Home;