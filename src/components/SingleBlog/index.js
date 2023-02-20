import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import style from './style.module.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert';
// import 'sweetalert/dist/sweetalert.css';


const SingleBlog = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    // CALL THE SAME FETCH HOOK TO GET THE SPECIFIC POST
    const { posts, loading, error } = useFetch(`http://localhost:8000/posts/${id}`);

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
                // handle delete action
                axios.delete(`http://localhost:8000/posts/${id}`)
                    .then(response => {
                        navigate('/');
                    })
                    .catch(error => {
                        console.error('There was a problem deleting the item:', error);
                    });
                Swal('Deleted!', 'Your item has been deleted', 'success');
            } else {
                Swal('Cancelled', 'Your item is safe :)', 'info');
            }
        });
    };

    //TODO: DELETE ALERT OR ANY THING TO BE WORK A CLEAN WORK
    //REMEMBER: PUTTING THE JSON FILE IN THE PUBLIC CAUSED A DESASTER

    return (

        loading ? "Loading ...." :
            <div>
                <h1>{posts.author}</h1>
                <p>{posts.content}</p>
                <div className={style.btnContainer}>
                    <button type="button" onClick={() => handleDelete(posts.id)}>Delete</button>
                </div>
            </div>

    )
}


export default SingleBlog;