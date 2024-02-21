import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Banner.scss';

const Banner = ({ image, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Banner;
