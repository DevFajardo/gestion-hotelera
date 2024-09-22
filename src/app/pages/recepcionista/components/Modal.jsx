import Modal from "react-modal";
import '../styles/Modal.css';
// Para que el modal esté vinculado correctamente a tu root
Modal.setAppElement("#modal-root");

const HabitacionModal = ({ isOpen, onRequestClose, habitacion }) => {
  const handleStatus = (estado) => {
    return estado.includes("disponible") ? "Reservar" : "Gestionar";
  };

  const handleAction = () => {
    if (habitacion.estado.includes("disponible")) {
      console.log("Reservar habitación");
    } else {
      console.log("Gestionar habitación");
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="modal-overlay"
        className="modal-content"
        contentLabel={`Habitación ${habitacion.numero}`}
      >
        <div className="modal-header">
          <button onClick={onRequestClose}>←</button>
          <h2>Habitación Nro: {habitacion.numero}</h2>
        </div>
        <div className="modal-body">
          <p><strong>Tipo:</strong> {habitacion.nombre}</p>
          <p><strong>Piso:</strong> {habitacion.piso}</p>
          <p><strong>Detalle:</strong> {habitacion.detalle_habitacion}</p>
          <p><strong>Estado:</strong> {habitacion.estado}</p>
        </div>
        <div className="modal-footer">
            <p>{handleStatus(habitacion.estado)}</p>
          <button onClick={handleAction}>{'>'}</button>
        </div>
      </Modal>
    </>
  );
};

export default HabitacionModal;