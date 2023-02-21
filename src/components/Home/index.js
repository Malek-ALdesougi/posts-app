import style from './style.module.css'
import useFetch from '../../Hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

const Home = () => {

    const { posts, loading, error } = useFetch('http://localhost:8000/posts');
    const searchRef = useRef('');
    const navigate = useNavigate();
    // first thing do useRef with empty array

    //TODO: i need to create a ref with an initial value of array to be able to access each component separatly
    const containerDivRef = useRef([]);
    const authorsNamesRef = useRef([]);
    const inputRef = useRef([]);
    const [search, setSearch] = useState('');
    
    if (loading !== false) return;
    if (error) return;

    // this is the second way of solution for searching by name ;
    const handleSearchInputChnage = (e) => {
        setSearch(e.target.value);
        searchRef.current = e.target.value;
    }
    const handleSearchBtn = async () => {
        //   const data = await  fetch(`http://localhost:8000/posts/?q=${searchRef.current}`);
        //   const result = await data.json();
        //   navigate('search', { state: result });
    }

    const changeAuthorNameIcon = (index) => {

        containerDivRef.current[index].style.display = 'block';
        authorsNamesRef.current[index].style.display = 'none';
        inputRef.current[index].value = authorsNamesRef.current[index].textContent;
        // I need to take this name value to put it inside te input 
        console.log(authorsNamesRef.current[index].textContent);
    }

    const handleEditAuthorName = (index) => {

        console.log(index);
        let editInputValue = inputRef.current[index]?.value ;
        authorsNamesRef.current[index].textContent = editInputValue;
        containerDivRef.current[index].style.display = 'none';
        authorsNamesRef.current[index].style.display = 'block';


    }

    const handleCancelAuthorName = (index) => {
        containerDivRef.current[index].style.display = 'none';
    }

    return (

        <>
            <div className={style.container2}>
                <input onChange={handleSearchInputChnage} type={'text'} placeholder={'Search a Blog'}></input>
                {/* <button onClick={handleSearchBtn} className='btn' type='button'>Search Blog</button> */}
            </div>

            {loading ? 'Loading ...' :
                <div className={style.homeContainer}>
                    <h1>All Blogs</h1>

                    {posts?.filter(item => search ? item.author.toLowerCase().includes(search.toLowerCase()) : item.author).map((blog, index) => {
                        return (
                            <div className={style?.blogs} key={blog?.id}>
                                <MDBIcon className={style.editIcon} fas icon="pen-square" onClick={() => changeAuthorNameIcon(index)} />
                                <h3 ref={name => authorsNamesRef.current[index] = name}>{blog?.author}</h3>
                                    {/* this div is made multiple times useRef not working */}
                                <div style={{display: 'none'}} ref={el => containerDivRef.current[index] = el}>
                                    <input ref={input => inputRef.current[index] = input} type={'text'} />
                                    <button onClick={() => handleEditAuthorName(index)} type='button'>Edit</button>
                                    <button onClick={() => handleCancelAuthorName(index)} type='button'>Cancel</button>
                                </div>
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