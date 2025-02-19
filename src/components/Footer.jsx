import React from 'react';
import logo from "../assets/images/logo .png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos section */}
          <div className="footer-about">
            <h3 className="text-2xl font-semibold mb-4 text-orange-400">A propos</h3>
            <p className="text-sm">
              Instanews.com, votre source d'information en temps réel, vous apporte les dernières actualités locales et internationales.
            </p>
          </div>

          {/* Contactez-nous section */}
          <div className="footer-contact">
            <h3 className="text-2xl font-semibold mb-4">Contactez-nous</h3>
            <p className="text-sm flex items-center mb-2">
              <i className="fa fa-phone mr-2 text-orange-400"></i> +225 07 58 99 86 35
            </p>
            <p className="text-sm flex items-center mb-2">
              <i className="fa fa-phone mr-2 text-orange-400"></i> +225 05 05 23 10 17
            </p>
            <p className="text-sm flex items-center">
              <i className="fa fa-envelope mr-2 text-orange-400"></i> contact@instanews.com
            </p>
          </div>

          {/* Logo section */}
          <div className="footer-logo flex justify-center md:justify-end">
            <img src={logo} alt="Instanews Logo" className="h-10" />
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="footer-bottom bg-gray-800 py-4 mt-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-sm">&copy; 2025 Instanews.com - Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
