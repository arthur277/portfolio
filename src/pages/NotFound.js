import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="notFound">
                <div className="notFoundContent">
                    <h3>Desole cette page n existe pas !</h3>
                    <NavLink exact to="/" >
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;