import { useParams } from "react-router-dom";
import style from './style.module.css'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteSingleBlog, cleanUpActiveBlog, fetchSingleBlog } from "../../reducers/blogsReducer/actions";

const SingleBlog = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleBlog(`http://localhost:8000/posts/${id}`));

        return (() => {
            dispatch(cleanUpActiveBlog())
        })
    }, [])


    const { activeBlog, loading, error } = useSelector((state) => state);


    if (loading) return;
    if (error) return;

    // handel the delete button 
    const handleDelete = () => {
        Swal({
            title: 'Are you sure?',
            text: 'You are about to delete this item',
            icon: 'warning',
            buttons: ['Cancel', 'Delete'],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(deleteSingleBlog(`http://localhost:8000/posts/${id}`))
                navigate('/');
                Swal('Deleted!', 'Your item has been deleted', 'success');
            } else {
                Swal('Cancelled', 'Your item is safe :)', 'info');
            }
        });
    };

    return (

        loading ? "Loading ...." :
            <div>
                <h1>{activeBlog?.author}</h1>
                <p>{activeBlog?.content}</p>
                <div className={style.btnContainer}>
                    <button type="button" onClick={() => handleDelete(activeBlog?.id)}>Delete</button>
                </div>
            </div>

    )
}


export default SingleBlog;