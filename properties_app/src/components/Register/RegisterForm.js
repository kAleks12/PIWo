import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {registerWithEmail} from '../../Firebase/UserService';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await registerWithEmail(email, password)
                .then(() => {
                    navigate('/')
                });
        } catch (err) {
            console.error({err});
            alert(err.message);
        }
    };

    const navigateToLogin = () => {
        navigate('/login-form');
    }

    const navigateToHome = () => {
        navigate('/');
    }

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
                    <button type="submit" className="btn light-button">Register</button>
                    <button className="btn redirect-button" onClick={navigateToLogin}>Login</button>
                    <button className="btn cancel-button" onClick={navigateToHome}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;