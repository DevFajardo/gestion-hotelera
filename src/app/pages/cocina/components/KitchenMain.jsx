'use client';
import {useState} from 'react';
import '../styles/KitchenServiceTable.css'; // Importa el archivo CSS

const KitchenService = ({ reserva_habitacion }) => {
    const [reserva, setReserva] = useState(reserva_habitacion);
    const handleCheckboxChange = (index) => {
        const updatedRooms = [...reserva];
        updatedRooms[index].estado = !updatedRooms[index].estado;
        setReserva(updatedRooms);
    };


    return (
        <div className="container">
            <div className='table-container'>
            <table className="table">
                <thead>
                    <tr>
                        <th>HABITACION</th>
                        <th>PISO</th>
                        <th>CANTIDAD</th>
                        <th>ESTADO</th>
                    </tr>
                </thead>
                <tbody>
                    {reserva.map((room, index) => (
                        <tr key={index}>
                            <td>{room.numero}</td>
                            <td>{room.piso}</td>
                            <td>{room.cantidad}</td>
                            <td><input
                                type="checkbox"
                                checked={room.estado}
                                onChange={() => handleCheckboxChange(index)} // función para manejar el cambio
                            /></td>
                        </tr>
                    ))}
                    <tr className="total-row">
                        <td>TOTAL</td>
                        <td></td>
                        <td>{reserva.reduce((acc, room) => acc + room.cantidad, 0)}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <div className="footer">
                <button className="print-button" onClick={() => window.print()}>
                    IMPRIMIR
                </button>
            </div>
            </div>
        </div>
    );
};

export default KitchenService;
