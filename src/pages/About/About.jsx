import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutBannerBg from '../../assets/images/about_banner_bg.webp'
import Collapse from '../../components/Collapse/Collapse';
import './About.scss';
import aboutData from '../../assets/data/aboutData.json';
import { useEffect } from 'react';

const About = () => {

	useEffect(() => {
		document.title = `Kasa | A propos`
	}, [])

	return (
		<div>
			<Banner title='À propos de nous' backgroundSrc={AboutBannerBg} />
			<ul className='collapse-container'>
				{aboutData.map(({ index, title, content }) =>
				(
					<div key={`${index}-${title}`}>
						<Collapse
							title={title}
							content={content}
						/>
					</div>
				)
				)}
			</ul>
		</div>
	);
};

export default About;