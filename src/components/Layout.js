import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../styles/assets/logo.png';
import logo_negatif from '../styles/assets/logo_negatif.png';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
    return (
        <>
            <header className="header">
                <img src={logo} alt="Logo Kasa" className="header-logo" />
                <nav className="navigation">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Accueil
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        À Propos
                    </NavLink>
                </nav>
            </header>

            <main className="main-content">
                {children}
            </main>

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
