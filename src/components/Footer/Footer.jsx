import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/footer-logo.svg';


export default function Footer() {

	return (
		<footer className='footer'>
			<img src={logo} alt="logo" className='footer__logo' />
			<p className='footer__text'>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};