import style from './style.module.css'
import useFetch from '../../Hooks/useFetch';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Blog from './Blog';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../reducers/blogsReducer/actions';


const Home = ({ children }) => {


    const { posts, loading, error } = useSelector((state) => state);
    const [search, setSearch] = useState('');

    // GET THE DATA USING THE REDUX STORE
    // fire the dispatch action
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData('http://localhost:8000/posts'));
    }, [])


    const handleSearchInputChnage = (e) => {
        setSearch(e.target.value);
    }

    if (loading !== false) return;
    if (error) return;

    return (
        <>
            <div className={style.container2}>
                <input className={style.searchInput} onChange={handleSearchInputChnage} type={'text'} placeholder={'Search a Blog'}></input>
            </div>

            {loading ? 'Loading ...' :
                <div className={style.homeContainer}>

                    <h1>All Blogs</h1>

                    {loading ? 'Loading...' : posts?.filter(item => search ? item.author.toLowerCase().includes(search.toLowerCase()) : item.author).map((blog, index) => {
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