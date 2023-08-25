import React from 'react';
import { useParams } from 'react-router-dom';

import './Logement.scss';
import Collapse from '../../components/Collapse/Collapse';
import Carrousel from '../../components/Carrousel/Carrousel';
import Rating from '../../components/Rating/Rating';
import logementData from '../../assets/data/logementData.json';
import { useEffect } from 'react';

const Logements = () => {

	useEffect(() => {
		document.title = `Kasa | ${logementObject.title}`
	}, [])

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
	// on récupère le nom de l'hôte dans un tableau pour pouvoir le séparer en deux
	const hostName = logementObject.host.name.split(' ');


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
						<div className='host-name'>
							<span>{hostName[0]}</span>
							<span>{hostName[1]}</span>
						</div>
						<img src={logementObject.host.picture} alt={logementObject.host.name} className='host-picture' />
					</div>

					<Rating value={logementObject.rating} />

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