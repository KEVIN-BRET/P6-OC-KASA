import React from 'react';
import logo from '../../assets/images/LOGO.svg';
import './Header.scss'

const Header = () => {
	return (
		<div className='header-container'>
			<img src={logo} alt="logo" />
			<nav className='nav-container'>
				<div>Accueil</div>
				<div>A Propos</div>
			</nav>
		</div>
	);
};

export default Header;