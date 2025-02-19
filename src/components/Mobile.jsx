import React from 'react';
import phone from "../assets/images/phoneAndroid.png";
import sms from "../assets/images/sms_alertes_phone .png";
import orange from "../assets/images/logo-orange.jpg";
import moov from "../assets/images/moov.png";
import mtn from "../assets/images/logo-mtn.jpg";
import appStore from "../assets/images/ic-app-store.jpg";
import appAndroid from "../assets/images/ic-play-store.jpg";
import region from "../assets/images/regiongoh.png";

const Mobile = () => {
  return (
    <>
      <section id="mobile" className="py-12 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="w-full md:w-1/2">
        <img src={sms} alt="Alerte SMS" className="w-30 h-30 rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Alerte SMS</h2>
            <p className="text-gray-700 mb-6">Recevez des alertes en temps réel sur votre mobile en envoyant un SMS au numéro correspondant à votre opérateur...</p>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { img: orange, code: '*123#' },
                { img: mtn, code: '*456#' },
                { img: moov, code: '*789#' },
              ].map((operator, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={operator.img} alt="Operator Logo" className="w-16 h-16 mb-2" />
                  <p className="text-gray-600 font-semibold">Code: {operator.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="application-mobile" className="py-12 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-green-700 mb-4">APPLICATION MOBILE INSTANEWS.COM</h2>
            <p className="text-gray-700 mb-6">Suivez l'actualité en temps réel où que vous soyez avec l'application mobile Instanews...</p>
            <img src={appStore} alt="Instanews Logo" className="w-32 h-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <img src={phone} alt="Application Mobile Instanews" className="w-25 h-30 rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
  
      <section id="application-android" className="py-12 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="w-full md:w-1/2">
            <img src={phone} alt="Application Android" className="w-25 h-25 rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">Application Android</h2>
            <p className="text-gray-700 mb-6">Profitez d’une expérience mobile fluide et rapide avec notre application Android...</p>
            <img src={appAndroid} alt="Télécharger sur Google Play" className="w-32 h-auto" />
          </div>
        </div>
      </section>
  
      <section id="Zone-de-Gagnoa" className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-6">Zone de Gagnoa</h2>
        <div className="flex justify-center">
          <img src={region} alt="Zone de Gagnoa" className="w-100 h-auto rounded-lg shadow-lg" />
        </div>
      </section>
    </>
  );
};

export default Mobile;
