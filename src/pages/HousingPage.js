import React from 'react';
import { useParams } from 'react-router-dom';

const HousingPage = () => {
  let { id } = useParams();
  
  // Utilisez `id` pour récupérer les informations du logement spécifique
  // ...

  return (
    <div>
      <h1>Détails du logement {id}</h1>
      {/* Autres éléments de la page de logement */}
    </div>
  );
};

export default HousingPage;
