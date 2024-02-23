import React from 'react';
import Banner from '../components/Banner';
import bannerImage1 from '../styles/assets/bannerImage1.jpg';
import HousingCard from '../components/HousingCard';
import listings from '../data/listings.json';
import '../styles/HomePage.scss'

const HomePage = () => {
  return (
    <>
      <Banner image={bannerImage1} title="Chez vous, partout et ailleurs"/>
      <div className="gallery">
      {listings.map(listing => (
        <HousingCard
          key={listing.id}
          id={listing.id}
          title={listing.title}
          cover={listing.cover}
        />
      ))}
    </div>
    </>
  );
};

export default HomePage;
