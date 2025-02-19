import React, { useState } from 'react';
import hotel from "../assets/images/hotel.png";
import resto from "../assets/images/restos.png";
import bar from "../assets/images/bar.png";
import job from "../assets/images/job.png";
import commerce from "../assets/images/commerce.png";
import service from "../assets/images/services.png";
import sante from "../assets/images/sante.png";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('hotels');

  const categories = [
    { id: "hotels", name: "Hôtels", icon: hotel, details: [
        { name: "Hotel Paris", roomsAvailable: 5, pricePerNight: "100€", distance: "2km" },
        { name: "Hotel Nice", roomsAvailable: 3, pricePerNight: "120€", distance: "3.5km" },
        { name: "Hotel Lyon", roomsAvailable: 2, pricePerNight: "90€", distance: "1.2km" },
      ] },
    { id: "restos", name: "Restos", icon: resto, details: [
        { name: "Le Gourmet", cuisine: "Française", rating: 4.5, distance: "1km" },
        { name: "Pizza Napoli", cuisine: "Italienne", rating: 4.2, distance: "2.3km" },
      ] },
    { id: "bars", name: "Bars", icon: bar, details: [
        { name: "Bar La Nuit", drinks: "Cocktails, Whisky", rating: 4.7, distance: "500m" },
      ] },
    { id: "emplois", name: "Emplois", icon: job, details: [
        { title: "Développeur Frontend", company: "TechCorp", location: "Paris", salary: "3000€/mois" },
      ] },
    { id: "commerces", name: "Commerces", icon: commerce, details: [
        { name: "Boulangerie Du Coin", offers: "Pain frais, Viennoiseries", rating: 4.6, distance: "800m" },
      ] },
    { id: "sante", name: "Santé", icon: sante, details: [
        { name: "Clinique Saint-Pierre", services: "Médecine générale, Urgences", rating: 4.4, distance: "1.5km" },
      ] },
    { id: "services", name: "Services", icon: service, details: [
        { name: "Plomberie Expert", serviceType: "Plomberie", rating: 4.7, distance: "2km" },
      ] },
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section id="categories" className="bg-orange-400 text-gray-900 p-4 md:p-8">
      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => handleCategoryClick(category.id)}
              className={`flex flex-col items-center ${activeCategory === category.id ? 'text-blue-500' : 'text-gray-700'} focus:outline-none transition-transform hover:scale-110`}
            >
              <img src={category.icon} alt={category.name} className="w-12 md:w-16 h-12 md:h-16 mb-2" />
              <span className="text-sm md:text-base">{category.name}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Affichage des détails de la catégorie sélectionnée */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">{categories.find(cat => cat.id === activeCategory)?.name}</h3>
        <ul>
          {categories.find(cat => cat.id === activeCategory)?.details.map((detail, index) => (
            <li key={index} className="mb-2 p-2 border-b border-gray-300">
              <h4 className="text-lg font-semibold">{detail.name || detail.title}</h4>
              {detail.roomsAvailable && <p>Chambres disponibles: {detail.roomsAvailable}</p>}
              {detail.pricePerNight && <p>Prix par nuit: {detail.pricePerNight}</p>}
              {detail.distance && <p>Distance: {detail.distance}</p>}
              {detail.cuisine && <p>Cuisine: {detail.cuisine}</p>}
              {detail.rating && <p>Note: {detail.rating}</p>}
              {detail.drinks && <p>Boissons: {detail.drinks}</p>}
              {detail.services && <p>Services: {detail.services}</p>}
              {detail.salary && <p>Salaire: {detail.salary}</p>}
              {detail.location && <p>Lieu: {detail.location}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
