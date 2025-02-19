import React from 'react';

const chefsVillages = [
  {
    name: 'Chef Kouassi Koffi',
    village: 'Village de Gagnoa',
    imgSrc: '/images/chef1.jpg',
    description: 'Dirigeant traditionnel de la communauté avec sagesse et bienveillance.',
    link: 'details/chef1.html',
  },
  {
    name: 'Chef Yao Brou',
    village: 'Village de Daloa',
    imgSrc: '/images/chef2.jpg',
    description: 'Héritier des coutumes et traditions locales, garant de la paix.',
    link: 'details/chef2.html',
  },
  {
    name: 'Chef Koné Souleymane',
    village: 'Village de Bouaké',
    imgSrc: '/images/chef3.jpg',
    description: 'Veille sur le bien-être et l\'harmonie de la population.',
    link: 'details/chef3.html',
  },
  {
    name: 'Chef Touré Mamadou',
    village: 'Village de Yamoussoukro',
    imgSrc: '/images/chef4.jpg',
    description: 'Représentant des traditions ancestrales et médiateur de la communauté.',
    link: 'details/chef4.html',
  },
];

const ChefsVillages = () => {
  return (
    <section id="chefs-villages" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center bg-green-500 text-white  mb-8">Chefs des Villages</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 px-6">
        {chefsVillages.map((chef, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <a href={chef.link}>
              <img src={chef.imgSrc} alt={chef.name} className="w-full h-48 object-cover" />
            </a>
            <div className="p-6 bg-green-500">
              <h4 className="text-xl font-bold text-white mb-2">{chef.name}</h4>
              <p className="text-gray-200 text-sm font-semibold mb-4">{chef.village}</p>
              <p className="text-gray-200 text-base">{chef.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefsVillages;
