import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {loginInWithEmail} from '../../Firebase/UserService';
import './LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginInWithEmail(email, password)
                .then(() => {
                    navigate('/');
                });
        } catch (err) {
            console.error({err});
            alert('Invalid credentials');
        }
    };

    const navigateToRegister = () => {
        navigate('/register-form');
    };

    const navigateToLogin= () => {
        navigate('/login');
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

                <div className="button-container-email">
                    <button type="submit" className="btn light-button">Sign in</button>
                    <button className="btn redirect-button" onClick={navigateToRegister}>Register</button>
                    <button className="btn cancel-button" onClick={navigateToLogin}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;