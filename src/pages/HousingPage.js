import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import listingsData from '../data/listings.json'; // Assume listings.json is in the data directory
import Collapse from '../components/Collapse';
import '../styles/HousingPage.scss'

const HousingPage = () => {
  const [housingData, setHousingData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    // If the listings data is an array
    const listing = listingsData.find(listing => listing.id === id);
    setHousingData(listing);
  }, [id]);

  if (!housingData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Slideshow housingId={id} />
      <div className='Infos'>
        <div className='title-locate-tags'>
          <h1 className='title'>{housingData.title}</h1>
          <p className='locate'>{housingData.location}</p>
          {housingData.tags.map((tag, index) => (
            <span key={index} className='tags'>{tag}</span>
          ))}
        </div>
        <div className='name-picture-rate'>
          <div className='name-picture'>
            <h2 className='name'>{housingData.host.name}</h2>
            <img src={housingData.host.picture} alt={housingData.host.name} />
          </div>
          <p>Rating: {housingData.rating}</p>
        </div>
      </div>
      <div className='collapses'>
        <Collapse title='Description' children={<p>{housingData.description}</p>} className='collapse-housing' />
        <Collapse title='Equipements'
          children={
            <ul>
              {housingData.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>}
          className='collapse-housing' />
      </div>
    </div>
  );
};

export default HousingPage;
