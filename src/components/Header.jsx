import React from 'react';
import logo from '../assets/images/LOGO.svg';

const Header = () => {
	return (
		<div>
			<img src={logo} alt="logo" />
		<nav>
			<ul>
			<li>Accueil</li>
			<li>About</li>
			</ul>
		</nav>
		</div>
	);
};

export default Header;