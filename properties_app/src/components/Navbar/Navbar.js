import {useNavigate} from 'react-router-dom';
import {useUser, logout} from '../../Firebase/UserService';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const user = useUser();
    const handleAddNewClick = () => {
        navigate('/add');
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Properties for rent</a>

                <div className="button-container">

                    {user ? (
                        <div className="user-info">
                            <div className='user-logged'>
                                Hello, {user.displayName ? user.displayName : user.email}!
                            </div>
                            <button className="btn btn-outline-light" onClick={logout}>Log out</button>
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