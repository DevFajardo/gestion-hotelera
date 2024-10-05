import useReserva from "./useReserva";
import { useEffect } from 'react';
import '../styles/ReservasTable.css';

const Todaslasreservas = [
    { codigo: 1, identificacion: 123456789, nombre: 'Juan Perez', fechaLlegada: '2021-10-01', fechaSalida: '2021-10-05', numero_habitacion: 100, piso: 100, pago: 'Cancelado', estado: 'En espera' },
    { codigo: 2, identificacion: 123456789, nombre: 'Juan Perez', fechaLlegada: '2021-10-01', fechaSalida: '2021-10-05', numero_habitacion: 101, piso: 100, pago: 'Pendiente', estado: 'En hospedaje' },
]

const ReservasTable = () => {
    const { reservas, setReservas, handleEstadoReserva, handleCancelarReserva } = useReserva();

    useEffect(() => {
        setReservas(Todaslasreservas);
    }, []);

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
                            <td>{reserva.fechaLlegada} / {reserva.fechaSalida}</td>
                            <td>{`${reserva.numero_habitacion} - ${reserva.piso}`}</td>
                            <td>{reserva.pago}</td>
                            <td>
                                <div className="icons-estado">
                                    <input
                                        type="checkbox"
                                        checked={reserva.estado === 'En hospedaje'}
                                        onChange={() => handleEstadoReserva(reserva)}
                                    />
                                    <div className="button-cancel" onClick={() => handleCancelarReserva(reserva)}></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReservasTable;
