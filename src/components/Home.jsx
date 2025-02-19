import React from 'react';
import { Link } from 'react-router-dom';
import rondPointGagnoa from "../assets/images/rond point gagnoa.jpeg";
import Gagnoa from "../assets/images/retro rond point de gagnoa.jpeg";
import Gagnoa1 from "../assets/images/retro rond point de gagnoa.jpeg";
import video1 from "../assets/video/gagnoa.mp4";
import video2 from "../assets/video/le vieux.mp4";
import video3 from "../assets/video/vidpub1.mp4";
import Necrologie from './Necrologie'; // Importation du composant Necrologie
import Evenements from './Evenements'; // Importation du composant Evenements
import Categories from '../components/Categories';
import Publicite from '../components/Publicite'; // Importation du composant Publicite

import Mobile from './Mobile';

const Home = () => {
  return (
    <div className="bg-gray-800 text-white p-8 ">

      {/* SEO: Titre et description */}
      <h1 className="text-3xl font-bold text-center mb-4">Bienvenue sur InstaNews</h1>
      <meta name="description" content="InstaNews fournit des informations en temps réel sur les pharmacies de garde et les événements locaux." />
      <meta name="keywords" content="pharmacie, Gagnoa, informations en temps réel, vidéos, images" />

      {/* Présentation et liens vers les différentes villes */}
      <p className="text-center mb-6 text-lg">Votre source d'information en temps réel.</p>

      {/* Section galerie multimédia avec images et vidéos */}
      <section className="media-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Image 1 */}
        <div className="media-item">
          <img 
            src={rondPointGagnoa} 
            alt="Le rond point de la ville de Gagnoa"
            className="w-full h-48 object-cover rounded-lg shadow-md"
            loading="lazy" 
          />
          <h3 className="text-lg font-semibold mt-2 text-center">Le rond point de la ville de Gagnoa</h3>
          <p className="text-sm text-center mt-1">Une vue actuelle du rond-point à Gagnoa.</p>
        </div>

        {/* Vidéo 1 */}
        <div className="media-item">
          <video controls className="w-full h-48 object-cover rounded-lg shadow-md" loading="lazy">
            <source src={video1} type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo.
          </video>
          <h3 className="text-lg font-semibold mt-2 text-center">Gagnoa en vidéo</h3>
          <p className="text-sm text-center mt-1">Découvrez un aperçu vidéo de Gagnoa.</p>
        </div>

        {/* Image 2 */}
        <div className="media-item">
          <img 
            src={Gagnoa} 
            alt="Le rond point de Gagnoa en 1970"
            className="w-full h-48 object-cover rounded-lg shadow-md"
            loading="lazy" 
          />
          <h3 className="text-lg font-semibold mt-2 text-center">Le rond point de Gagnoa en 1970</h3>
          <p className="text-sm text-center mt-1">Retour en arrière : Le rond point de Gagnoa en 1970.</p>
        </div>

        {/* Vidéo 2 */}
        <div className="media-item">
          <video controls className="w-full h-48 object-cover rounded-lg shadow-md" loading="lazy">
            <source src={video2} type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo.
          </video>
          <h3 className="text-lg font-semibold mt-2 text-center">Le vieux était un génie</h3>
          <p className="text-sm text-center mt-1">Une vidéo fascinante sur le passé de Gagnoa.</p>
        </div>

        {/* Image 3 */}
        <div className="media-item">
          <img 
            src={Gagnoa1} 
            alt="Le rond point de la ville de Gagnoa (Autre angle)"
            className="w-full h-48 object-cover rounded-lg shadow-md"
            loading="lazy" 
          />
          <h3 className="text-lg font-semibold mt-2 text-center">Le rond point de Gagnoa (Autre angle)</h3>
          <p className="text-sm text-center mt-1">Une autre perspective du rond point de Gagnoa.</p>
        </div>
        
        {/* Vidéo 3 */}
        <div className="media-item">
          <video controls className="w-full h-48 object-cover rounded-lg shadow-md" loading="lazy">
            <source src={video3} type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo.
          </video>
          <h3 className="text-lg font-semibold mt-2 text-center">Publicité Vidéo</h3>
          <p className="text-sm text-center mt-1">Une vidéo publicitaire montrant Gagnoa.</p>
        </div>
      </section>

      {/* Section Nécrologie */}
      <Necrologie /> {/* Importation et affichage du composant Necrologie */}
      
      {/* Section des événements */}
      <Evenements /> {/* Ajout du composant Evenements ici */}
      
      {/* Afficher le composant Categories */}
      <Categories />
      
      {/* Insertion de la publicité */}
      <div className="publicite-section mb-8">
        <Publicite />
        
       <Mobile/>
      </div>
    </div>
  );
};

export default Home;
