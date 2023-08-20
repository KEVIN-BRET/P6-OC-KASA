import React from 'react';
import './Banner.scss';
import bannerBackground from '../../assets/images/banner_bg.webp';

const Banner = () => {
	return (
		<div className='banner'>
			<p className='banner__title'>Chez vous, partout et ailleurs</p>
			<div className='banner__background'></div>
			<img src={bannerBackground} alt="banner" className='banner__picture' />
		</div>
	);
};

export default Banner;