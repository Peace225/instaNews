import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams(); // Récupérer le paramètre dynamique "id" de l'URL

  return (
    <div className="details-container">
      <h1>Détails de {id}</h1>
      {/* Vous pouvez ajouter une logique pour afficher plus d'informations en fonction de l'id */}
      <p>Voici les détails pour : {id}</p>
    </div>
  );
};

export default Details;
