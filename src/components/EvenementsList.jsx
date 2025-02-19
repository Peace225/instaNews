// src/components/EvenementsList.jsx
import React from 'react';

const EvenementsList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {events.map((event, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <video controls className="w-full h-32 md:h-40 object-cover rounded-lg mb-4">
            <source src={event.video} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          <h4 className="text-lg md:text-xl font-semibold text-white">{event.title}</h4>
          <p className="text-xs md:text-sm text-gray-400">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EvenementsList;
