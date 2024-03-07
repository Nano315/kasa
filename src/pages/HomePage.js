import React from 'react';
import Banner from '../components/Banner';
import bannerImage1 from '../styles/assets/bannerImage1.jpg';
import Gallery from '../components/Gallery';
import listings from '../data/listings.json';

const HomePage = () => {
  return (
    <>
      <Banner image={bannerImage1} title="Chez vous,<span class='mobile-break'></span> partout et ailleurs"/>
      <Gallery listings={listings} />
    </>
  );
};

export default HomePage;
