import React from 'react';
import { useParams } from 'react-router-dom';

import './Logement.scss';

import Carrousel from '../../components/Carrousel/Carrousel';
import logementData from '../../assets/data/logementData.json';

const Logements = () => {

	// on récupère l'id du logement dans l'url
	const { logementId } = useParams();
	// on récupère l'objet logement correspondant à l'id
	const logementObject = logementData.find((logement) => logement.id === logementId);

	const slides = logementObject.pictures

	return (
		<div className='content'>

			<div className="carrousel-container">
				<Carrousel id={logementObject.id} slides={slides} logementObject={logementObject}/>
			</div>

			<h1>{logementObject.title}</h1>
		</div>
	);
};

export default Logements;