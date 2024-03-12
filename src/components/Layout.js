import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../styles/assets/logo.png';
import logo_negatif from '../styles/assets/logo_negatif.png';
import '../styles/Components/Layout.scss';

// Layout est un composant de mise en page qui englobe le header et le footer.
const Layout = ({ children }) => {
    return (
        // Fragment React pour grouper une liste d'enfants sans ajouter de nœuds supplémentaires au DOM
        <>
            {/* Header du site avec logo et navigation */}
            <header className="header">
                <img src={logo} alt="Logo Kasa" className="header-logo" />
                <nav className="navigation">
                    {/* NavLink est utilisé pour les liens de navigation qui peuvent être activés, indiquant la page actuelle */}
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Accueil
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        À Propos
                    </NavLink>
                </nav>
            </header>

            {/* Le contenu principal de la page est rendu ici. */}
            <main className="main-content">
                {children}
            </main>

            {/* Footer du site avec le logo négatif et les droits d'auteur */}
            <footer className="footer">
                <div className="footer-content">
                    <img src={logo_negatif} alt="Logo Kasa" className="footer-logo" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>

        </>
    );
};

export default Layout;
