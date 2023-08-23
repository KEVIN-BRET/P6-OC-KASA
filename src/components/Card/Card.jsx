import React from 'react';
import './Card.scss';
// import logementData from '../../assets/data/logementData.json';
import { Link } from 'react-router-dom';


const Card = ({ id, title, cover }) => {
	return (
		<Link to={`/logement/${id}`} className='card-wrapper'>
			<h3 className='card__title'>{title}</h3>
			<img className='card__picture' src={cover} alt={title} />
		</Link>
	);
};

export default Card;

