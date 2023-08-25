import React from 'react';
import { NavLink } from 'react-router-dom';
// on utilise NavLink au lieu de Link pour pouvoir ajouter une classe active au lien actif
import logo from '../../assets/images/LOGO.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="logo" />
            <nav className='nav-container'>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    A Propos
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
