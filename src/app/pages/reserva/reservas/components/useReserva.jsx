import {useState} from 'react';
export default function useReserva() {
    const [reservas, setReservas] = useState([]);
    const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

    return {
        reservas,
        setReservas,
        reservaSeleccionada,
        setReservaSeleccionada,
    }
}