import {loginWithGoogle, loginWithGithub} from "../../Firebase/UserService";
import {useNavigate} from "react-router-dom";
import './Login.css';


const Login = () => {
    const navigate = useNavigate();

    const handleLoginWithGoogle = () => {
        loginWithGoogle().then(() => navigate("/"));
    }

    const handleLoginWithGithub = () => {
        loginWithGithub().then(() => navigate("/"));
    }

    const handleLoginWithEmail = () => {
        navigate('/login-form');
    }

    const navigateHome = () => {
        navigate('/');
    }

    return <div className="login-form-container">
        <div className="login-method-container">
            <button className="btn light-button" onClick={handleLoginWithGoogle}>
                Login with Google
            </button>
            <button className="btn light-button" onClick={handleLoginWithGithub}>
                Login with github
            </button>
            <button className="btn light-button" onClick={handleLoginWithEmail}>
                Login with email
            </button>
            <button className="btn cancel-button" onClick={navigateHome}>
                Cancel
            </button>
        </div>
    </div>
}

export default Login;