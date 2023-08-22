import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/LOGO.svg';
import './Header.scss'

const Header = () => {
	return (
		<div className='header-container'>
			<img src={logo} alt="logo" />
			<nav className='nav-container'>
				<Link to="/">Accueil</Link>
				<Link to="/about">A Propos</Link>
			</nav>
		</div>
	);
};

export default Header;