import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Profile = () => {
    const currentUser = authService.getCurrentUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate('/');
    };

    if (!currentUser) {
        return <h2>You are not logged in</h2>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p><strong>Username:</strong> {currentUser.user.username}</p>
            <p><strong>Email:</strong> {currentUser.user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
