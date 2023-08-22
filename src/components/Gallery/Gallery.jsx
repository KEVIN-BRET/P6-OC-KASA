import React from 'react';
import './Gallery.scss';
import Card from '../Card/Card';
import logementData from '../../assets/data/logementData.json';

const Gallery = () => {
	return (
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
	);
};

export default Gallery;