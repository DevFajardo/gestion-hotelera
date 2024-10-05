import { useState } from 'react';
export default function useReserva() {
    const [reservas, setReservas] = useState([]);

    const actualizarReserva = (reservaActualizada) => {
        setReservas(reservas.map((r) => r.codigo === reservaActualizada.codigo ? reservaActualizada : r));
    };

    const handleEstadoReserva = (reserva) => {
        const nuevaReserva = { ...reserva, estado: reserva.estado === 'En espera' ? 'En hospedaje' : 'En espera' };
        actualizarReserva(nuevaReserva);
    };

    const handleCancelarReserva = (reserva) => {
        const reservaCancelada = { ...reserva, estado: 'Cancelado' };
        actualizarReserva(reservaCancelada);
        // Si quieres eliminarla de la lista después de cancelarla:
        setReservas(reservas.filter((r) => r.codigo !== reserva.codigo));
    };

    return {
        reservas,
        setReservas,
        handleEstadoReserva,
        handleCancelarReserva,
    };
}
