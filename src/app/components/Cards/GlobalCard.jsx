import './styles/card.css';
const CardContent = ({ habitacion, onClick, children }) => {
  return (
    <>
    <section className="card" onClick={onClick} style={{ cursor: "pointer" }}>
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
      {children}
    </section>
    
    </>
  );
};

export default CardContent;
