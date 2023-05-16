import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from './UserContext';
import './LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const {loginFunc} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        let validated = loginFunc(email, password)

        setLogged(validated);

        if (validated === true) {
            navigate('/');
        }
    };

    return (
        <div className='login-form-container'>
            <h2>Sign in to Give Me A House</h2>

            <form className='login-form' onSubmit={handleSubmit}>
                <label className='property'>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className='property'>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                {logged === false && (
                    <div className="red-text">
                        Invalid credentials
                    </div>
                )}

                <button type="submit" className="btn dark-button">Sign in</button>
            </form>
        </div>
    );
};

export default LoginForm;