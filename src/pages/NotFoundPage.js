import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="status-code">404</h1>
      <p className="message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFoundPage;
