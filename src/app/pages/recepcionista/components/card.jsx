import React from "react";
import "../styles/card.css";

const Card = ({ habitacion }) => {
  return (
    <section className="card">
      {/* Encabezado de la tarjeta con el número de la habitación e icono */}
      <div className="card-header">
        <span className="card-number">Nro: {habitacion.id}</span>
        <picture className="card-icon">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/EBEBEB/bed.png"
            alt="bed"
          />
        </picture>
        {/* Icono de cama */}
      </div>

      {/* Muestra el tipo o nombre de la habitación */}
      <div className="card-room-type">
        <span className="card-text">{habitacion.detalle_habitacion}</span>
        <picture className="card-icon-room">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/arcade/32/filled-star.png"
            alt="filled-star"
          />
        </picture>
      </div>

      {/* Muestra el estado de la habitación y un indicador visual */}
      <div className="card-status">
        <span className="status-text">DISPONIBLE </span>
        <span> 💚</span>
      </div>
    </section>
  );
};

export default Card;
