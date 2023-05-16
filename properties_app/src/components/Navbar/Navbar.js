import React, {useContext} from "react";
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../LoginPage/UserContext';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const {user, logoutFunc} = useContext(UserContext);

    const handleAddNewClick = () => {
        navigate('/add');
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        logoutFunc();
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Properties for rent</a>

                <div className="button-container">

                    {user ? (
                        <div className="user-info">
                            <div className='user-logged'>
                                Hello, {user.firstName} {user.lastName}!
                            </div>
                            <button className="btn btn-outline-light" onClick={handleLogout}>Log out</button>
                        </div>
                    ) : (
                        <button className="btn btn-outline-light" onClick={handleLoginRedirect}>Log in</button>
                    )}

                    <button className="btn btn-outline-light" onClick={handleAddNewClick}>Add new</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;