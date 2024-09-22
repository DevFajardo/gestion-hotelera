import {useState} from "react";
import HabitacionModal from "./Modal";
import "../styles/card.css";

const Card = ({ habitacion }) => {
  const [modalIsOpen, setIsOpen] = useState(false); // Estado para abrir y cerrar el modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
    <section className="card" onClick={openModal} style={{cursor: 'pointer'}}>
      {/* Encabezado de la tarjeta con el número de la habitación e icono */}
      <div className="card-header">
        <span className="card-number">Nro: {habitacion.numero}</span>
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
        <span className="card-text">{habitacion.nombre}</span>
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
     <HabitacionModal 
     isOpen={modalIsOpen} 
     onRequestClose={closeModal} 
     habitacion={habitacion}
    />
   </>
  );
};

export default Card;