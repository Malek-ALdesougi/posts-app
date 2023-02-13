import './style.css'
import { useState } from 'react';

const Home = ({ blogs }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    function getData() {
        setTimeout(() => {
            setData(blogs);
            setLoading(false);
        }, 2000)
    }

    getData();

    console.log(blogs);
    return (

        loading ? 'Loading ...' : 
        <div className="home-container">
            <h1>All Blogs</h1>

            {data.map((blog) => {
                return (
                    <div className='blogs' key={blog.id}>
                        <h3>{blog.author}</h3>
                        <p>{blog.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;