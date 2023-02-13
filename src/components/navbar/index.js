import './style.css';

const NavBar = () => {

    return (
        <>

            {/* <h1>I'm nav bar</h1> */}

            <div className="container">

                <div className='items'>

                    <h1 id='logo'>Estarta Blog</h1>

                    <ul className='nav-items'>
                        <li className='li'><a href='#'>What ever</a></li>
                        <li className='li'><button id='create-blog-button'><a href='#'>Create Blog</a></button></li>
                    </ul>
                </div>
            </div>

        </>
    )

}

export default NavBar;