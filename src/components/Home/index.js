import style from './style.module.css'
import useFetch from '../../Hooks/useFetch';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

const Home = () => {

    const { posts, loading, error } = useFetch('http://localhost:8000/posts');
    //TODO: i need to create a ref with an initial value of array to be able to access each component separatly
    const authorsNamesRef = useRef([]);
    const inputRef = useRef([]);
    const [search, setSearch] = useState('');
    const [isEditable, setIsEditable] = useState({});
    const [newValue, setNewValue] = useState({});

    if (loading !== false) return;
    if (error) return;

    const handleSearchInputChnage = (e) => {
        setSearch(e.target.value);
    }

    const changeEditState = (index) => {
        setIsEditable({ ...isEditable, [`${index}`]: true });
    }

    const handleEditAuthorName = (index) => {

        // if new value is there set it to the newValue state 
        // to be able to read to the input value and updated
        let editInputValue = inputRef.current[index].value;
        setNewValue({ ...newValue, [`${index}`]: editInputValue });
        setIsEditable({ ...isEditable, [`${index}`]: false })
    }

    const changeEditStateOpposite = (index) => {
        setIsEditable({ ...isEditable, [`${index}`]: false })
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

                                {!isEditable[index] ?
                                    <>
                                        <MDBIcon className={style.editIcon} fas icon="pen-square" onClick={() => changeEditState(index)} />
                                        <h3>{newValue[index] ? newValue[index] : blog?.author}</h3>
                                    </> :
                                    <div>
                                        <input defaultValue={newValue[index] ? newValue[index] : blog?.author} ref={(input) => inputRef.current[index] = input} type={'text'} />
                                        <button onClick={() => handleEditAuthorName(index)} type='button'>Edit</button>
                                        <button onClick={() => changeEditStateOpposite(index)} type='button' >Cancel</button>
                                    </div>
                                }
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