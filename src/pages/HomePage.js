import React from 'react';
import Banner from '../components/Banner';
import bannerImage1 from '../styles/assets/bannerImage1.jpg';

const HomePage = () => {
  return (
    <>
      <Banner image={bannerImage1} title="Chez vous, partout et ailleurs"/>
    </>
  );
};

export default HomePage;
