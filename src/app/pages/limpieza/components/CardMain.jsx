'use client'
import { Filter } from "@/app/components/Cards/filter";
import { useState } from "react";
import Card from "./card";

const Cards = ({ habitaciones }) => {
    const habitacionesFetch = habitaciones;
    const [habitacion, setHabitacion] = useState(habitacionesFetch);
    const [filter, setFilter] = useState({ nombre: "all", piso: "all" });
    return (
        <>
        <div className="filters-wrapper">
            <Filter rooms={habitaciones} setFilteredRooms={setHabitacion} filters={filter} setFilters={setFilter} filterProperty="nombre" general="CATEGORIAS" />
            <Filter rooms={habitaciones} setFilteredRooms={setHabitacion} filters={filter} setFilters={setFilter} filterProperty="piso" general="PISOS" />
        </div>
        
        {habitacion.map((room) => (
           <Card key={room.id} habitacion={room} />
        ))}
        </>
    );
}

export default Cards;