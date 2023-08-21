import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutBannerBg from '../../assets/images/about_banner_bg.webp'
import Collapse from '../../components/Collapse/Collapse';
import './About.scss';

const About = () => {
	return (
		<div>
			<Banner title='À propos de nous' backgroundSrc={AboutBannerBg} />
			<Collapse title='Titre du Collapse' content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
			<Collapse title='Titre du Collapse' content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
			<Collapse title='Titre du Collapse' content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
		</div>
	);
};

export default About;