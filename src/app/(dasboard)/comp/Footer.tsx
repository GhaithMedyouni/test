import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Informations sur l'application */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h5 className="text-lg font-semibold">À propos de l’application</h5>
          <p className="text-sm">
            &copy; 2024 Votre Entreprise - Panneau d&apos;administration analytique avec tableau de bord et gestion sécurisée des utilisateurs.
          </p>
        </div>

        {/* Liens vers les réseaux sociaux */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FiFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FiTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FiInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FiLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
