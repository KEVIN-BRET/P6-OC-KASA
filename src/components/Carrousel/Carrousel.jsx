import './Carrousel.scss';
import { useState } from 'react';

import logementObject from '../../assets/data/logementData.json';
// import prevBtn from '../../assets/images/prev-btn.png'
// import nextBtn from '../../assets/images/next-btn.png'

export function Carrousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
            <img src={slides[currentIndex]} className='slides' alt={logementObject.title} />
        </div>
    );
}

export default Carrousel;
