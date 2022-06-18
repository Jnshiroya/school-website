import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './GurukrupaLogo.png'


const Navbar = (props) => {
    let navigate = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('type');
        navigate('/');
        props.showalert('success','Your Account LogOut SuccessFully..');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <img src={logo} className="logo" alt="LOGO" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/">AboutUs</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle mx-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Acedemic
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Event</Link></li>
                                    <li><Link className="dropdown-item" to="/">Team</Link></li>
                                    <li><Link className="dropdown-item" to="/">RESULT</Link></li>
                                </ul>
                            </li>
                            {localStorage.getItem('token') && localStorage.getItem('user-type') === 'admin' ?
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle mx-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Add-Member
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/addstudent">STUDENT</Link></li>
                                        <li><Link className="dropdown-item" to="/addstaff">STAFF</Link></li>
                                    </ul>
                                </li>:""
                                
                            }
                        </ul>
                        <Link className="btn btn-outline-success mx-2" to='/' role='button'>Fee Payment</Link>
                        {!localStorage.getItem('token') ?
                            <form className="d-flex" role="search">
                                <Link className="btn btn-outline-success" to='/login' role='button' showalert={props.showalert}>Login</Link>
                            </form> : <button className="btn btn-outline-success mx-2" onClick={handlelogout} >LogOut</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar