import React, { useState, useEffect } from 'react';
import listings from '../data/listings.json';
import '../styles/Components/Slideshow.scss';

// Slideshow est un composant qui crée un carrousel d'images pour un logement donné.
const Slideshow = ({ housingId }) => {
  // currentIndex représente l'index de l'image courante affichée.
  const [currentIndex, setCurrentIndex] = useState(0);
  // housingImages est le tableau des images du logement actuel.
  const [housingImages, setHousingImages] = useState([]);

  // L'effet est utilisé pour mettre à jour les images du carrousel lorsque le housingId change.
  useEffect(() => {
    const housing = listings.find(listing => listing.id === housingId);
    if (housing) {
      setHousingImages(housing.pictures);
    }
  }, [housingId]);

  // Fonction pour naviguer vers l'image précédente dans le carrousel.
  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? housingImages.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour naviguer vers l'image suivante dans le carrousel.
  const goToNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === housingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    // La div slideshow contient tout le carrousel, y compris les images et les boutons de navigation.
    <div className="slideshow" style={{ width: '1240px', height: '415px', borderRadius: '25px' }}>
      
      {/* Affiche les flèches de navigation uniquement si plus d'une image est disponible */}
      {housingImages.length > 1 && (
        <>
          <button className="arrow left" onClick={goToPrevious}>
            {/* SVG pour la flèche gauche */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
              <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
            </svg>
          </button>
          <button className="arrow right" onClick={goToNext}>
            {/* SVG pour la flèche droite */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
              <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
            </svg>
          </button>
        </>
      )}

      {/* L'image courante du carrousel */}
      <img src={housingImages[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {/* Numérotation de l'image courante sur le total des images */}
      {housingImages.length > 1 && (
        <div className="numeration">
          {currentIndex + 1}/{housingImages.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
