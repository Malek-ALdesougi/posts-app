import style from './style.module.css';
console.log(style);

const NavBar = () => {

    return (
        <>

            {/* <h1>I'm nav bar</h1> */}

            <div className={style.container}>

                <div className={style.items}>

                    <h1 id={style.logo}>Estarta Blog</h1>

                    <ul className={style.navItems}>
                        <li className={style.li}><a href='#'>What ever</a></li>
                        <li className={style.li}><button id={style.createBlogButton}><a href='#'>Create Blog</a></button></li>
                    </ul>
                </div>
            </div>

        </>
    )

}

export default NavBar;