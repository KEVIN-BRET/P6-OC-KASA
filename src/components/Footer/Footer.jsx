import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/footer-logo.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<img src={logo} alt="logo" className='footer-logo'/>
			<p className='footer-text'>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;