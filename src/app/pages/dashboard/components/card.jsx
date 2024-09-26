import { useState } from "react";
import HabitacionModal from "./Modal";
import CardContent from "/src/app/components/Cards/GlobalCard";

const Card = ({ habitacion }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* CardContent recibe children adicionales */}
      <CardContent habitacion={habitacion} onClick={openModal} >
      {/* Muestra el estado de la habitación y un indicador visual */}
      <div className="card-status">
        <span className="status-text">{habitacion.estado_disponibilidad.toUpperCase()}</span>
        <span> 💚</span>
      </div>
      </CardContent>

      {/* El modal */}
      <HabitacionModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        habitacion={habitacion}
      />
      
    </>
  );
};

export default Card;
