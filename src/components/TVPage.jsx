import React from 'react';
import { TvIcon } from '@heroicons/react/24/outline';

const TVPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-4">
      <TvIcon className="w-20 h-20 text-yellow-400 mb-6" />
      <h1 className="text-3xl md:text-5xl font-bold">Bienvenue sur INSTA-TV</h1>
      <p className="text-lg md:text-xl mt-4">Regardez vos émissions en direct et consultez les actualités.</p>
      
      {/* Vidéos en direct */}
      <div className="mt-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Live Streaming</h2>
        <video controls className="w-full h-64 bg-black rounded-lg">
          <source src="/assets/video/live-tv.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
      
      {/* Liste des actualités */}
      <div className="mt-8 w-full max-w-4xl text-left">
        <h2 className="text-2xl font-semibold mb-4">Actualités</h2>
        <ul className="space-y-4">
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Titre de l'actualité 1</h3>
            <p className="text-gray-400">Description de l'actualité 1...</p>
          </li>
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Titre de l'actualité 2</h3>
            <p className="text-gray-400">Description de l'actualité 2...</p>
          </li>
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Titre de l'actualité 3</h3>
            <p className="text-gray-400">Description de l'actualité 3...</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TVPage;
