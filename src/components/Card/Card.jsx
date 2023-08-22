import React from 'react';
import './Card.scss';

const Card = ({title, cover}) => {
	return (
		<li className='card-wrapper'>
			<h3 className='card__title'>{title}</h3>
			<img className='card__picture' src={cover} alt={title} />
		</li>
	);
};

export default Card;