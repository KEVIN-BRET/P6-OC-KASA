import React from 'react';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import HomeBannerBg from '../../assets/images/home_banner_bg.webp'
import './Home.scss';

const Home = () => {
	return (
		<div>
			<Banner title='Chez vous, partout et ailleurs' backgroundSrc={HomeBannerBg} />
			<Gallery />
		</div>
	);
};

export default Home;