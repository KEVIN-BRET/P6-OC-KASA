import React from 'react';
import { useParams } from 'react-router-dom';

import './Logement.scss';

import Carrousel from '../../components/Carrousel/Carrousel';
import logementData from '../../assets/data/logementData.json';

const Logements = () => {

	// Cette methode peut generer des erreurs si on ne récupère pas le bon paramètre :
	// const { logementId } = useParams();
	// Utiliser cette méthode pour être sure de pouvoir récupérer plusieurs paramètres
	// on récupère l'id du logement dans l'url
	const params = useParams();
	const logementId = params.logementId;
	// on récupère l'objet logement correspondant à l'id
	const logementObject = logementData.find((logement) => logement.id === logementId);
	// on récupère les images du logement
	const slides = logementObject.pictures

	return (
		<div className='content'>

			<div className="carrousel-container">
				<Carrousel slides={slides} title={logementObject.title} />
			</div>

			<div className='title'>{logementObject.title}</div>
			<dic className="location">{logementObject.location}</dic>
		</div>
	);
};

export default Logements;