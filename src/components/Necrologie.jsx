// src/components/Necrologie.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Importation de Framer Motion pour les animations
import Image1 from "../assets/images/necro.jpeg";
import Image2 from "../assets/images/necro.jpg";
import Image3 from "../assets/images/necro.jpeg";
import Image4 from "../assets/images/necro.jpeg";

const Necrologie = () => {
  // Liste des défunts et leurs informations
  const defunts = [
    {
      name: "Jean Dupont",
      description: "Décédé le 15 février 2025 à l'âge de 75 ans. Il laisse derrière lui une famille et des amis endeuillés.",
      image: Image1,
    },
    {
      name: "Marie Curie",
      description: "Pionnière de la science et de la recherche, elle a changé le monde avec ses découvertes.",
      image: Image2,
    },
    {
      name: "Paul Durand",
      description: "Homme de grande valeur, il a marqué la communauté par son dévouement.",
      image: Image3,
    },
    {
      name: "Claude Monet",
      description: "Artiste et peintre de renom, son héritage artistique est inoubliable.",
      image: Image4,
    },
    // Ajoutez d'autres défunts ici
  ];

  return (
    <section id="necrologie" className="bg-gray-900 text-white p-8">
      {/* SEO: Titre et description */}
      <header className="necrologie-header text-center mb-8">
        <h2 className="text-3xl font-semibold">Nécrologie</h2>
        <p className="text-sm mt-2">Hommages et souvenirs des personnes disparues récemment</p>
        <meta name="description" content="Hommages et informations sur les défunts récents. Soyez informé des décès importants." />
        <meta name="keywords" content="nécrologie, décès, hommage, souvenirs, défunt, informations" />
      </header>

      {/* Affichage des cartes des défunts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {defunts.map((defunt, index) => (
          <motion.div
            key={index}
            className="card bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Conteneur flex pour centrer l'image */}
            <div className="flex justify-center items-center mb-4">
              {/* Image avec effet de zoom au survol */}
              <img
                src={defunt.image}
                alt={defunt.name}
                className="w-40 h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{defunt.name}</h3>
            <p className="text-sm mt-2 text-center">{defunt.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Necrologie;
