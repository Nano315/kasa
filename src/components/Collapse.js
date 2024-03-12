import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Components/Collapse.scss';

// Le composant Collapse est un composant d'interface rétractable
const Collapse = ({ title, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;
        if (isOpen) {
            // Lorsque le composant est ouvert, ajuste sa hauteur à celle du contenu interne
            content.style.height = `${content.scrollHeight}px`;
        } else {
            // Lorsqu'il est fermé, la hauteur est réinitialisée à zéro
            content.style.height = `0px`;
        }
    }, [isOpen]); // Ce useEffect dépend de la valeur de isOpen

    // Cette fonction bascule l'état ouvert/fermé du composant
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${className}`}>
            {/* Le bouton sert de déclencheur pour ouvrir/fermer le contenu */}
            <button className="collapse-toggle" onClick={toggleCollapse}>
                <span className="collapse-title">{title}</span>
                {/* L'icône change d'orientation en fonction de l'état ouvert/fermé */}
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" className={`collapse-icon ${isOpen ? 'rotate' : ''}`}>
                    <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white" />
                </svg>
            </button>
            {/* Le contenu rétractable est placé ici et contrôlé via ref */}
            <div ref={contentRef} className="collapse-content">
                {children}
            </div>
        </div>
    );
};

// Validation des types de props pour le composant Collapse
Collapse.propTypes = {
    title: PropTypes.string.isRequired, // Titre du contenu rétractable
    children: PropTypes.node.isRequired, // Contenu à afficher dans le composant rétractable
};

export default Collapse;
