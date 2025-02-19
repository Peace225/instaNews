import React from 'react';
import { motion } from 'framer-motion';
import affpub1 from "../assets/images/affpub1.jpeg";
import affpub2 from "../assets/images/affpub2.jpeg";
import video from "../assets/video/vidpub1.mp4";
import casque from "../assets/images/casque2.jpeg";
import basket from "../assets/images/chaupub.jpeg";
import montre from "../assets/images/montre.jpeg";

const Publicite = () => {
  return (
    <section id="publicite" className="bg-gray-100 py-8">
      <header className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">INSTA-PUB</h2>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold  bg-blue-500 text-center mb-6">Nos Publicités</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-500">
          {[{ img: affpub1, title: "Promo Spéciale", text: "Découvrez nos offres exclusives de la semaine !" },
            { img: affpub2, title: "Offre Exclusive", text: "Une offre que vous ne pouvez pas manquer !" },
            { video: video, title: "Nouveautés en Vidéo", text: "Regardez cette vidéo pour découvrir nos nouveautés!" }
          ].map((pub, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            >
              {pub.img ? <img src={pub.img} alt={pub.title} className="w-full h-auto rounded-lg mb-4" /> : 
                <video controls className="w-full h-auto rounded-lg mb-4">
                  <source src={pub.video} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>}
              <h4 className="font-semibold text-lg">{pub.title}</h4>
              <p>{pub.text}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={() => alert(pub.text)}
              >
                Plus d'infos
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h3 className="text-2xl font-semibold text-center bg-red-500 text-white py-2 mb-6">Articles en Promotion</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ img: casque, title: "Casque Bluetooth", price: "25,000 FCFA", store: "Boutique TechPlus" },
            { img: basket, title: "Chaussures Sport", price: "35,000 FCFA", store: "Fashion World" },
            { img: montre, title: "Montre Connectée", price: "50,000 FCFA", store: "E-Shop Electronics" }
          ].map((article, index) => (
            <motion.div
              key={index}
              className="bg-red-500 p-4 rounded-lg shadow-md text-white"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
            >
              <img src={article.img} alt={article.title} className="w-full h-auto rounded-lg mb-4" />
              <h4 className="font-semibold text-lg">{article.title}</h4>
              <p>Prix : {article.price}</p>
              <p>Disponible chez : {article.store}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publicite;
