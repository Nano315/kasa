import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/Components/Gallery.scss'; // Assurez-vous d'inclure le style correct pour le composant Gallery

const Gallery = ({ listings }) => {
  let navigate = useNavigate();

  return (
    <div className="gallery">
      {listings.map(listing => (
        <div 
          key={listing.id} 
          className="housing-card" 
          onClick={() => navigate(`/housing/${listing.id}`)}
          style={{ backgroundImage: `url(${listing.cover})` }}
        >
          <h2 className="housing-title">{listing.title}</h2>
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  listings: PropTypes.array.isRequired // Vous attendez un tableau d'objets 'listings'
};

export default Gallery;
