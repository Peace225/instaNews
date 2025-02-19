import React from 'react';

const authorities = [
  {
    name: 'M. Yssouf Diabate',
    role: 'Maire de la Ville',
    imgSrc: '/image/le maire.jpeg',
    description: "Dans le cadre de ses fonctions, le maire agit également en tant qu'agent de l'État. A ce titre il est notamment chargé de l'état civil, de la révision et de la tenue des listes électorales, de l'organisation des élections ainsi que du recensement citoyen.",
    link: 'details/maire.html',
  },
  {
    name: 'M. Fofana Lacina',
    role: 'Préfet',
    imgSrc: '/image/prefet.jpeg',
    description: "Le préfet de région est chargé de préparer et de mettre en œuvre le Contrat de projet État-Région ( CPER ). Il arrête la répartition - entre actions et départements - des crédits qui sont mis à sa disposition à l'intérieur d'un même programme budgétaire et est le garant de la mesure des résultats obtenus.",
    link: 'details/prefet.html',
  },
  {
    name: 'M. Soumahoro Moussa',
    role: 'Sous-Préfet',
    imgSrc: '/images/sous-prefet.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'details/sous-prefet.html',
  },
  {
    name: 'M. François Yao',
    role: 'Préfet de Police',
    imgSrc: '/images/prefet-police.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'details/prefet-police.html',
  },
  {
    name: 'M. Serge Konan',
    role: 'Commissaire - 1er Arrondissement',
    imgSrc: '/images/commissaire1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'details/commissaire1.html',
  },
];

const Autorite = () => {
  return (
    <section id="autorites" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center bg-slate-400 text-red-500  mb-8">Les Autorités</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {authorities.map((authority, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <a href={authority.link}>
              <img src={authority.imgSrc} alt={authority.name} className="w-full h-48 object-cover" />
            </a>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{authority.name}</h4>
              <p className="text-gray-500 text-sm font-semibold mb-4">{authority.role}</p>
              <p className="text-gray-700 text-base">{authority.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Autorite;
