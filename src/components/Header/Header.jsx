import React from 'react';
import { NavLink } from 'react-router-dom';
// on utilise NavLink au lieu de Link pour pouvoir ajouter une classe active au lien actif
import logo from '../../assets/images/LOGO.svg';
import './Header.scss';


export default function Header() {

    return (
        <div className='header-container'>

            <NavLink to="/Kasa"><img src={logo} alt="logo" /></NavLink>

            <nav className='nav-container'>
                <NavLink
                    to="/Kasa"
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
