import React from 'react';
import '../css/UserProfile.css';

const UserProfile = ({ user }) => (
    <div className="user-profile">
        <img src={user.photo} alt="Foto del usuario" className="user-photo" />
        <div className="user-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.document}</p>
            <button className="btn-change-password">Cambiar Contraseña</button>
        </div>
    </div>
);

export default UserProfile;
