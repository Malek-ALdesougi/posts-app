import style from './style.module.css'
import { useState, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';

const Home = () => {

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    const { posts, loading, error } = useFetch('http://localhost:8000/posts');

    if (loading !== false) return;

    if (error) return;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setData(blogs);
    //         setLoading(false);
    //     }, 2000)
    // }, [])

    return (

        loading ? 'Loading ...' :
            <div className={style.homeContainer}>
                <h1>All Blogs</h1>

                {posts?.map((blog) => {
                    return (
                        <div className={style.blogs} key={blog.id}>
                            <h3>{blog.author}</h3>
                            <Link to={`single-blog/${blog.id}`} className={style.link}>
                                <p>{blog.content}</p>
                            </Link>
                            ------
                        </div>
                    )
                })}
            </div>
    )
}

export default Home;