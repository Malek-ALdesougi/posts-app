import styles from './style.module.css'
import { useNavigate, useLocation } from 'react-router-dom';

const Search = () => {

    const location = useLocation();
    const myData = location.state;
    const navigate = useNavigate();
    console.log(myData);

    const handleBackHome = () => {
        navigate('/');
    }

    return (
        <>

        <h2 className={styles.searchHeader}>Searching Results</h2>
            {myData?.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item?.author}</h2>
                        <p>{item?.content}</p>

                        -----------
                    </div>
                )
            })}

            <button onClick={handleBackHome}>Back Home</button>
        </>
    )



    // return (
    //     <div className={styles.container}>
    //         {/* <label>Search</label> */}
    //         <input type={'text'} placeholder={'Search a Blog'}></input>
    //         <button className='btn' type='button'>Search Blog</button>
    //     </div>
    // )
}

export default Search;