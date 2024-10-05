import useReserva from "./useReserva";
import { useEffect } from "react";
import "../styles/ReservasTable.css";
import { getReservas } from "@/utils/peticiones";

const ReservasTable = () => {
  const { reservas, setReservas, handleEstadoReserva, handleCancelarReserva } =
    useReserva();

  useEffect(() => {
    getReservas(setReservas);
  }, [setReservas]);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Fecha llegada / salida</th>
            <th>Habitacion</th>
            <th>Pago</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.codigo}>
              <td>{reserva.codigo}</td>
              <td>{reserva.identificacion}</td>
              <td>{reserva.nombre}</td>
              <td>
                {reserva.fechallegada.split("T")[0]} /{" "}
                {reserva.fechasalida.split("T")[0]}
              </td>
              <td>{`# ${reserva.numero_habitacion} - piso ${reserva.piso}`}</td>
              <td>{reserva.pago}</td>
              <td>
                <div className="icons-estado">
                  <input
                    type="checkbox"
                    checked={reserva.estado === "En hospedaje"}
                    onChange={() => handleEstadoReserva(reserva)}
                  />
                  <div
                    className="button-cancel"
                    onClick={() => handleCancelarReserva(reserva)}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservasTable;
