import React, { useState, useEffect } from 'react';
import listings from '../data/listings.json'; // chemin d'accès à ajuster
import '../styles/Slideshow.scss';

const Slideshow = ({ housingId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [housingImages, setHousingImages] = useState([]);

  useEffect(() => {
    const housing = listings.find(listing => listing.id === housingId);
    if (housing) {
      setHousingImages(housing.pictures);
    }
  }, [housingId]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? housingImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === housingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow" style={{ width: '1240px', height: '415px', borderRadius: '25px' }}>
      {housingImages.length > 1 && (
        <>
          <button className="arrow left" onClick={goToPrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
              <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
            </svg>
          </button>
          <button className="arrow right" onClick={goToNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
              <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
            </svg>
          </button>
        </>
      )}
      <img src={housingImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {housingImages.length > 1 && (
        <div className="numeration">
          {currentIndex + 1}/{housingImages.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;