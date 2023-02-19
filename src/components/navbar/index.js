import style from './style.module.css';
import { Link } from 'react-router-dom';
console.log(style);

const NavBar = () => {

    return (
        <>

            {/* <h1>I'm nav bar</h1> */}

            <div className={style.container}>

                <div className={style.items}>

                    <h1 id={style.logo}>Estarta Blog</h1>

                    <ul className={style.navItems}>
                        <li className={style.li}><Link to={'/'}>Home</Link></li>
                        <li className={style.li}><button id={style.createBlogButton}><Link to={'/new-post'}>Create Blog</Link></button></li>
                    </ul>
                </div>
            </div>

        </>
    )

}

export default NavBar;