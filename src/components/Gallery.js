import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/Components/Gallery.scss';

// Gallery est un composant qui affiche une grille de logements.
const Gallery = ({ listings }) => {
  // Hook pour la navigation programmée.
  let navigate = useNavigate();

  return (
    // La classe 'gallery' applique un style de grille à ses enfants.
    <div className="gallery">
      {/* La liste des logements est mappée pour générer une grille de cartes */}
      {listings.map(listing => (
        // Chaque carte est un élément cliquable qui mène à sa page de détail
        <div
          key={listing.id} // Clé unique pour optimiser le rendu des listes en React
          className="housing-card" // Style de la carte
          onClick={() => navigate(`/housing/${listing.id}`)} // Navigation vers la page de détail
          style={{ backgroundImage: `url(${listing.cover})` }} // Image de fond de la carte
        >
          {/* Titre du logement */}
          <h2 className="housing-title">{listing.title}</h2>
        </div>
      ))}
    </div>
  );
};

// Déclaration des propTypes pour la validation des données reçues par le composant.
Gallery.propTypes = {
  listings: PropTypes.array.isRequired // 'listings' doit être un tableau et est requis.
};

export default Gallery;
