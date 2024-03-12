import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Components/Banner.scss';

// Le composant Banner prend une image et un titre comme props
const Banner = ({ image, title }) => {
  // Rendu du composant : une div avec une image de fond et un titre conditionnel
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {/* Le titre est rendu uniquement s'il est présent. Utilisation de dangerouslySetInnerHTML pour interpréter le HTML */}
      {title && <h1 className="banner-title" dangerouslySetInnerHTML={{ __html: title }}></h1>}
    </div>
  );
};

// Définition des types de props attendus
Banner.propTypes = {
  image: PropTypes.string.isRequired, // 'image' est obligatoire
  title: PropTypes.string // 'title' n'est pas obligatoire
};

export default Banner;
