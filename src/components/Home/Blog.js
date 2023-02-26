import { memo, useState } from "react"
import style from './style.module.css'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";



const Blog = ({ blog}) => {

    const [isEditable, setIsEditable] = useState(false);
    const [newValue, setNewValue] = useState(blog?.author);



    return (
        <div className={style?.blogs}>
            {!isEditable ?
                <div className={style.headerAndIconDiv}>
                    <h3>{newValue}</h3>
                    <MDBIcon className={style.editIcon} fas icon="pen-square" onClick={() => setIsEditable(true)} />
                </div>
                :
                <div>
                    <input onChange={(e) => setNewValue(e.target.value)} className={style.editInput} defaultValue={blog?.author} type={'text'} />
                    <button onClick={() => setIsEditable(false)} className={style.editAndCancelBtn} type='button'>Edit</button>
                    <button onClick={() => setIsEditable(false)} className={style.editAndCancelBtn} type='button' >Cancel</button>
                </div>
            }
            <Link to={`single-blog/${blog?.id}`} className={style.link}>
                <p>{blog?.content}</p>
            </Link>
        </div>
    )
}

export default memo(Blog)