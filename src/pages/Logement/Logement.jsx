import React from 'react';
import { useParams } from 'react-router-dom';

import './Logement.scss';
import Collapse from '../../components/Collapse/Collapse';
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

			<div className="details-container">

				<div className="title-container">
					<div className='title'>{logementObject.title}</div>
					<div className="location">{logementObject.location}</div>
					<div className='tags'>{logementObject.tags.map((tag, index) => (<div className='tag' key={index}>{tag}</div>))}</div>
				</div>

				<div className="host-rating-container">
					<div className='host'>
						<div className='host-name'>{logementObject.host.name}</div>
						<img src={logementObject.host.picture} alt={logementObject.host.name} className='host-picture' />
					</div>
					<div className="rating">RATING</div>
				</div>

			</div>

			<div className="logement-collapse-container">

				<Collapse title={`Description`} content={logementObject.description} />

				<Collapse title={`Equipements`} content={logementObject.equipments.map((equipement, index) => <div className="equipement-list" key={index}>{equipement}</div>)} />

			</div>



		</div>
	);
};

export default Logements;