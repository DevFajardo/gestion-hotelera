'use client';
import CardContent from "@/app/components/Cards/GlobalCard";
import { useState } from "react";
import '../styles/Limpieza.css';

const CardLimpieza = ({ habitacion }) => {
    const [cleanState, setCleanState] = useState(habitacion.estado_limpieza || 'sucio '); // 'sucio', 'en limpieza', 'limpio'
    const [cleaning, setCleaning] = useState(false); // Para controlar el estado de "En limpieza"

    const iniciarLimpieza = () => {
        // Solo permitir iniciar la limpieza si está sucia
        if (cleanState === 'sucio ') {
            setCleanState('en limpieza'); // Cambiar a "En limpieza"
            setCleaning(true);
        }
    };

    const terminarLimpieza = () => {
        // Permitir al usuario terminar la limpieza manualmente
        if (cleanState === 'en limpieza') {
            setCleanState('limpio '); // Cambiar a "Limpio"
            setCleaning(false);
        }
    };

    return (
        <>
            <CardContent habitacion={habitacion}>
                <div className="card-status">
                    {/* Mostrar el estado de la habitación: sucia, en limpieza o limpia */}
                    <span className="status-text">
                        {cleanState === 'sucio ' && 'SUCIA'}
                        {cleanState === 'en limpieza' && 'EN LIMPIEZA'}
                        {cleanState === 'limpio ' && 'LIMPIA'}
                    </span>
                    {/* Mostrar el ícono dependiendo del estado */}
                    <span>
                        {cleanState === 'sucio ' && '💔'}
                        {cleanState === 'en limpieza' && '🛠️'}
                        {cleanState === 'limpio ' && '💚'}
                    </span>
                    {/* Botón para iniciar la limpieza si está sucia */}
                    {cleanState === 'sucio ' && (
                        <button
                            className="cleanButton"
                            onClick={iniciarLimpieza}
                            disabled={cleanState === 'limpio ' || cleaning}
                        >
                        Limpiar
                        </button>
                    )}
                    {/* Botón para terminar la limpieza manualmente si está en proceso */}
                    {cleanState === 'en limpieza' && (
                        <button className="cleanButton" onClick={terminarLimpieza}>
                            Finalizar
                        </button>
                    )}
                </div>
            </CardContent>
        </>
    );
};

export default CardLimpieza;
