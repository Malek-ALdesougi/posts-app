import style from './style.module.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {

    const handleActiveStyle = ({ isActive }) => {
        return {
            color: isActive ? "tomato" : "black",
            fontWeight: isActive ? 'bolder' : 'normal',
            textDecoration: isActive ? 'underline' : 'none'
        }
    }

    return (
        <>
            <div className={style.container}>

                <div className={style.items}>

                    <h1 id={style.logo}>Estarta Blog</h1>

                    <ul className={style.navItems}>
                        <li className={style.li}><NavLink style={handleActiveStyle} to={'/'}>Home</NavLink></li>
                        <li className={style.li}><NavLink style={handleActiveStyle} to={'/login'}>Login</NavLink></li>
                        <li className={style.li}><button id={style.createBlogButton}><NavLink to={'/new-post'}>Create Blog</NavLink></button></li>
                    </ul>
                </div>
            </div>

        </>
    )

}

export default NavBar;