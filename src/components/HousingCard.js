import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/HousingCard.scss';

const HousingCard = ({ id, title, cover }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/housing/${id}`);
  };

  return (
    <div className="housing-card" onClick={handleClick} style={{ backgroundImage: `url(${cover})` }}>
      <h2 className="housing-title">{title}</h2>
    </div>
  );
};

HousingCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default HousingCard;
