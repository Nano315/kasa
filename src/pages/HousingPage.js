import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import listingsData from '../data/listings.json';
import Collapse from '../components/Collapse';
import '../styles/Pages/HousingPage.scss';
import Rate from '../components/Rate';

// Composant de page pour les détails du logement
const HousingPage = () => {
  // État pour stocker les données du logement actuel
  const [housingData, setHousingData] = useState(null);

  // Pour la navigation programmée
  const navigate = useNavigate();

  // Récupère l'ID du logement à partir de l'URL
  let { id } = useParams();

  // Cherche les données du logement à chaque changement d'ID
  useEffect(() => {
    const listing = listingsData.find(listing => listing.id === id);
    if (!listing) {
      // Si le logement n'existe pas, redirection vers la page 'non trouvée'
      navigate('/not-found');
    } else {
      // Si le logement est trouvé, mise à jour de l'état avec ses données
      setHousingData(listing);
    }
  }, [id, navigate]);

  // Affichage conditionnel en fonction de la disponibilité des données du logement
  if (!housingData) {
    // Si les données ne sont pas chargées, retourne null pour éviter l'affichage
    return null;
  }

  // Rendu de la page de logement avec les composants appropriés
  return (
    <div>
      {/* Carousel d'images pour le logement */}
      <Slideshow housingId={id} />
      <div className='Infos'>

        {/* Informations sur le logement incluant le titre, le lieu et les tags */}
        <div className='title-locate-tags'>
          <h1 className='title'>{housingData.title}</h1>
          <p className='locate'>{housingData.location}</p>
          <div className='tags-container'>
            {/* Génération des tags du logement */}
            {housingData.tags.map((tag, index) => (
              <span key={index} className='tags'>{tag}</span>
            ))}
          </div>
        </div>

        {/* Affichage du propriétaire et de la note du logement */}
        <div className='name-picture-rate'>
          <div className='name-picture'>
            <h2 className='name'>{housingData.host.name}</h2>
            <img src={housingData.host.picture} alt={`Hôte : ${housingData.host.name}`} />
          </div>
          {/* Composant pour la note sous forme d'étoiles */}
          <Rate rating={housingData.rating} />
        </div>
      </div>

      {/* Sections dépliables pour la description et les équipements */}
      <div className='collapses'>
        <Collapse title='Description' children={<p>{housingData.description}</p>} className='collapse-housing' />
        <Collapse title='Équipements' children={
          <ul>
            {housingData.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        } className='collapse-housing' />
      </div>
    </div>
  );
};

export default HousingPage;