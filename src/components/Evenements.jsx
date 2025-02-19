// src/components/Evenements.jsx
import React, { useState } from 'react';
import EvenementsNavbar from './EvenementsNavbar';
import EvenementsList from './EvenementsList';

const Evenements = () => {
  const evenements = {
    baptemes: [
      { title: "Baptême de Jean", description: "Célébration de l'arrivée de Jean.", video: "/video/bapteme1.mp4" },
      { title: "Baptême de Marie", description: "Un moment sacré pour Marie.", video: "/video/bapteme2.mp4" },
    ],
    anniversaires: [
      { title: "Anniversaire de Paul", description: "Célébration des 30 ans de Paul.", video: "/video/anniversaire1.mp4" },
      { title: "Anniversaire de Claire", description: "Claire fête ses 25 ans.", video: "/video/anniversaire2.mp4" },
    ],
    mariages: [
      { title: "Mariage de Luc et Sophie", description: "Un mariage de rêve.", video: "/video/mariage1.mp4" },
      { title: "Mariage de Marc et Julie", description: "Célébration de l'amour éternel.", video: "/video/mariage2.mp4" },
    ],
    funerailles: [
      { title: "Funérailles de Claude", description: "Hommage à Claude.", video: "/video/funerailles1.mp4" },
      { title: "Funérailles de Pierre", description: "Dépôt des cendres de Pierre.", video: "/video/funerailles2.mp4" },
    ],
  };

  const [activeSection, setActiveSection] = useState('baptemes');

  return (
    <section id="evenements" className="bg-white text-red-500 p-4 md:p-8">
      <header className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-red-500">Événements</h2>
      </header>

      <EvenementsNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <EvenementsList events={evenements[activeSection]} />
    </section>
  );
};

export default Evenements;
