import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import listingsData from '../data/listings.json';
import Collapse from '../components/Collapse';
import '../styles/Pages/HousingPage.scss';
import Rate from '../components/Rate';

const HousingPage = () => {
  const [housingData, setHousingData] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const listing = listingsData.find(listing => listing.id === id);
    if (!listing) {
      // Si aucun logement n'a été trouvé, redirigez vers la page NotFoundPage
      navigate('/not-found');
    } else {
      setHousingData(listing);
    }
  }, [id, navigate]);

  if (!housingData) {
    // Si housingData est toujours null, retournez null
    return null;
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
          <Rate rating={housingData.rating} />
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
