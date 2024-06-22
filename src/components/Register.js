import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import authService from '../services/authService';


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await authService.register(username, email, password);
            setMessage('User registered successfully!');
            window.alert("Registeration Successfully");
            navigate("/");
         
           
        } catch (error) {
            setMessage('Error: ' + error.response.data.msg);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <h2>Register</h2>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" >Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
