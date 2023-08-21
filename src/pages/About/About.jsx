import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutBannerBg from '../../assets/images/about_banner_bg.webp'

const About = () => {
	return (
		<div>
			<Banner title='À propos de nous' backgroundSrc={AboutBannerBg} />
		</div>
	);
};

export default About;