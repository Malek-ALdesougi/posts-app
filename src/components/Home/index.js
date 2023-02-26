import style from './style.module.css'
import useFetch from '../../Hooks/useFetch';
import { useState } from 'react';
import Blog from './Blog';

const Home = () => {

    const { posts, loading, error } = useFetch('http://localhost:8000/posts');
    const [search, setSearch] = useState('');

    if (loading !== false) return;
    if (error) return;

    const handleSearchInputChnage = (e) => {
        setSearch(e.target.value);
    }


    return (

        <>

            <div className={style.container2}>
                <input className={style.searchInput} onChange={handleSearchInputChnage} type={'text'} placeholder={'Search a Blog'}></input>
            </div>

            {loading ? 'Loading ...' :
                <div className={style.homeContainer}>
                    <h1>All Blogs</h1>

                    {posts?.filter(item => search ? item.author.toLowerCase().includes(search.toLowerCase()) : item.author).map((blog, index) => {
                        return (
                            <div className={style?.blogs} key={blog?.id}>
                                <Blog blog={blog} />
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default Home;