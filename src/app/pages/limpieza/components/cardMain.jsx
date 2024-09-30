'use client';
import { useState } from 'react';
import { Filter } from "@/app/components/Cards/filter";
import CardLimpieza from "./CardLimpieza";

  const Cards = ({habitaciones}) => {
    
  const habitacionesFetch = habitaciones;
  const [filteredRooms, setFilteredRooms] = useState(habitacionesFetch); // Estado de habitaciones filtradas
  const [filters, setFilters] = useState({ nombre: "all", piso: "all", estado_limpieza: "all"}); // Estado de los filtros

  return (
    <>
    <div className="filters-wrapper">
      <Filter
        rooms={habitaciones}
        setFilteredRooms={setFilteredRooms}
        filters={filters}
        setFilters={setFilters}
        filterProperty="nombre"
        general="CATEGORIAS"
      />
      <Filter
        rooms={habitaciones}
        setFilteredRooms={setFilteredRooms}
        filters={filters}
        setFilters={setFilters}
        filterProperty="piso"
        general="PISOS"
      />
      <Filter
        rooms={habitaciones}
        setFilteredRooms={setFilteredRooms}
        filters={filters}
        setFilters={setFilters}
        filterProperty="estado_limpieza"
        general="ESTADOS"
      />
      </div>
      <div className='grid-wrapper'>
      {filteredRooms.map((room) => (
        <CardLimpieza key={room.id} habitacion={room} />
      ))}
      </div>
    </>
  );
};

export default Cards;
