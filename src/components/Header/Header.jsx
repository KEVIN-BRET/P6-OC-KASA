import React from 'react';
import { NavLink } from 'react-router-dom';
// on utilise NavLink au lieu de Link pour pouvoir ajouter une classe active au lien actif
import logo from '../../assets/images/LOGO.svg';
import './Header.scss';


export default function Header() {

    return (
        <div className='header'>

            <NavLink to="/"><img className='header__logo' src={logo} alt="logo" /></NavLink>

            <nav className='header__nav'>
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
