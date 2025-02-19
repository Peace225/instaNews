import React, { useState, useEffect } from 'react';
import { TvIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from "../assets/images/logo .png";
import googlePlay from "../assets/images/googlePlaypg.png";
import appleStore from "../assets/images/apple-store.png";

const Header = () => {
  const messages = [
    "Bienvenue sur notre site",
    "Restez informé des nouvelles",
    "Suivez les événements en direct",
  ];

  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-800 text-white  w-full">
      {/* Barre de notification avec défilement */}
      <section className="bg-green-600 py-1 text-center text-xs md:text-sm w-full">
        <div className="animate-marquee overflow-hidden whitespace-nowrap">
          <span>Pharmacie de Garde : Centrale - Bien-Être - Santé Plus</span>
        </div>
      </section>

      {/* Logo et informations associées */}
      <div className="flex items-center justify-between p-3 md:p-4 container mx-auto w-full">
        <a href="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-80">
          <img src={logo} alt="Logo" className="h-6 md:h-10" />
          <span className="font-bold text-sm md:text-lg">À la Une</span>
        </a>

        {/* Icône TV */}
        <a href="/tv" className="flex items-center text-yellow-400 hover:text-yellow-300 space-x-2">
          <TvIcon className="h-6 w-6 md:h-8 md:w-8" />
          <span className="hidden md:inline">Direct TV</span>
        </a>

        {/* Liens vers Google Play et Apple Store */}
        <div className="flex space-x-2 md:space-x-4">
          <a href="#" className="hover:opacity-80">
            <img src={googlePlay} alt="Google Play" className="h-6 md:h-8" />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src={appleStore} alt="Apple Store" className="h-6 md:h-8" />
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className={`relative md:relative top-0 left-0 w-full bg-gray-700 md:bg-transparent md:flex md:justify-center ${menuOpen ? "block" : "hidden"}`}> 
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center text-sm md:text-base">
          <li><a href="gagnoa" className="block py-2 md:py-2 hover:text-gray-400">GAGNOA</a></li>
          <li><a href="daloa" className="block py-2 md:py-2 hover:text-gray-400">DALOA</a></li>
          <li><a href="sanpedro" className="block py-2 md:py-2 hover:text-gray-400">SAN PEDRO</a></li>
          <li><a href="yamoussoukro" className="block py-2 md:py-2 hover:text-gray-400">YAMOUSSOUKRO</a></li>
          <li><a href="bouake" className="block py-2 md:py-2 hover:text-gray-400">BOUAKE</a></li>
          <li><a href="instafm" className="block py-2 md:py-2 hover:text-gray-400">InstaFM</a></li>
        </ul>
      </nav>

      {/* Flash Info */}
      <section id="flash-info" className="bg-orange-400 text-white py-2 mt-4 md:mt-8">
        <div className="flex items-center justify-center gap-4 px-4">
          {/* Flèche gauche */}
          <button
            className="flash-btn text-2xl"
            onClick={() => setIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length)}
          >
            &#10094;
          </button>

          {/* Zone d'affichage du texte */}
          <div className="overflow-hidden w-full max-w-lg">
            <p className="text-center text-sm md:text-lg font-semibold transition-transform duration-500 ease-in-out">
              {messages[index]}
            </p>
          </div>

          {/* Flèche droite */}
          <button
            className="flash-btn text-2xl"
            onClick={() => setIndex((prevIndex) => (prevIndex + 1) % messages.length)}
          >
            &#10095;
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
