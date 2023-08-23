import './Carrousel.scss';
import { useState } from 'react';

import logementObject from '../../assets/data/logementData.json';
import prevBtn from '../../assets/images/prev-btn.png'
import nextBtn from '../../assets/images/next-btn.png'

export function Carrousel({ slides }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	function goToNext() {
		// 
		if (currentIndex === slides.length - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	}

	function goToPrevious() {
		if (currentIndex === 0) {
			setCurrentIndex(slides.length - 1);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	}

		return (
			<div>

				<img className='nav-btn prev-btn' src={prevBtn} alt='précédente' onClick={goToPrevious}></img>

				<img src={slides[currentIndex]} className='slides' alt={logementObject.title} />

				<img className='nav-btn next-btn' src={nextBtn} alt='suivante' onClick={goToNext}></img>

			</div>
		);
	}

	export default Carrousel;
