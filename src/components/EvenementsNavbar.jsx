// src/components/EvenementsNavbar.jsx
import React from 'react';

const EvenementsNavbar = ({ activeSection, setActiveSection }) => {
  const sections = ["baptemes", "anniversaires", "mariages", "funerailles"];

  return (
    <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-6 md:mb-8 text-sm md:text-lg">
      {sections.map((section) => (
        <li key={section}>
          <button
            onClick={() => setActiveSection(section)}
            className={`px-3 py-1 rounded-md ${activeSection === section ? 'bg-red-500 text-white' : 'text-black hover:text-red-500'}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EvenementsNavbar;
