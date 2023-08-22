import React from 'react';
import { useParams } from 'react-router-dom';

import './Logement.scss';
// import Card from '../../components/Card/Card';
import logementData from '../../assets/data/logementData.json';

const Logements = () => {

	// on récupère l'id du logement dans l'url
	const { logementId } = useParams();
	// on récupère l'objet logement correspondant à l'id
	const logementObject = logementData.find((logement) => logement.id === logementId);

	return (
		<div>
			<div className='test'>
				Fiche Logement : {logementId}
			</div>
			{console.log(logementObject.title)}
		</div>
	);
};

export default Logements;