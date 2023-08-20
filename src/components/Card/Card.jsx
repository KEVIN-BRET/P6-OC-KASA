import React from 'react';
import './Card.scss';

const Card = () => {
	return (
		<div className='card-wrapper'>
			<img className='card__picture' src='https://picsum.photos/200/300' alt='card' />
			<h3 className='card__title'>Card Title</h3>
		</div>
	);
};

export default Card;