import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {




    const history = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history('/login');
    }


    const isLoggedIn = localStorage.getItem('token');
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={'nav-link'} aria-current="page" to="/">Intern Task</Link>
                            </li>

                        </ul>

                        {isLoggedIn && (
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className={`nav-link `} to="/Createblog">CREATE BLOG</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className={`nav-link `} to="/Myaccount">My Account</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link `} to="/MyPost">My Post</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>

                                    </li>
                                </ul>
                            </div>)
                        }



                        {!isLoggedIn && (
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className={`nav-link `} to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link `} to="/signup">Signup</Link>
                                    </li>
                                </ul>
                            </div>)}





                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
