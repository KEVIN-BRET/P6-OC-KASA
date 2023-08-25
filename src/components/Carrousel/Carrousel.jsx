import './Carrousel.scss';
import { useState } from 'react';
import prevBtn from '../../assets/images/prev-btn.png';
import nextBtn from '../../assets/images/next-btn.png';

export function Carrousel({ slides, title }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fading, setFading] = useState(false);


	function goToPrevious() {
		setFading(true);
		setTimeout(() => {
			if (currentIndex === 0) {
				setCurrentIndex(slides.length - 1);
			} else {
				setCurrentIndex(currentIndex - 1);
			}
			setFading(false);
		}, 200); // ce doit être le même temps que celui défini dans le CSS pour la transition
	}
	
	function goToNext() {
		setFading(true); // 
		setTimeout(() => {
			if (currentIndex === slides.length - 1) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
			setFading(false); //
		}, 200); // ce doit être le même temps que celui défini dans le CSS pour la transition
	}
	

	return (
		<div className='carrousel'>
			{
				slides.length === 0 ? ( // si pas de photo
					<h2 className="no-photo-msg">Pas de photo disponible ..</h2>
				) : slides.length === 1 ? ( // si une seule photo
					<img src={slides[currentIndex]} className='slides' alt={title} />
				) : (
					<div>
						<img className='nav-btn prev-btn' src={prevBtn} alt='précédente' onClick={goToPrevious} />
						
						<img src={slides[currentIndex]} className={`slides ${fading ? 'fading-out' : ''}`} alt={title} />

						<img className='nav-btn next-btn' src={nextBtn} alt='suivante' onClick={goToNext} />
						<div className="slide-number">
							{currentIndex + 1} / {slides.length}
						</div>
					</div>
				)
			}
		</div>
	);
}

export default Carrousel;
