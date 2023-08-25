import React from 'react';
import Banner from '../../components/Banner/Banner';
import HomeBannerBg from '../../assets/images/home_banner_bg.webp'
import './Home.scss';
import Card from '../../components/Card/Card';
import logementData from '../../assets/data/logementData.json';
import { useEffect } from 'react';

export function Home() {

	useEffect(() => {
		document.title = `Kasa | Accueil`
	}, [])

	return (
		<div>
			<Banner title='Chez vous, partout et ailleurs' backgroundSrc={HomeBannerBg} />

			<div className='gallery'>
				{logementData.map(({ id, title, cover }) =>
				(
					<Card key={id}
						id={id}
						title={title}
						cover={cover}
					/>
				)
				)}
			</div>

		</div>
	);
};

export default Home;