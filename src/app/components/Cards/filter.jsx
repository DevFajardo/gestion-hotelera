import './styles/filter.css';

const Filter = ({ rooms, setFilteredRooms, filters, setFilters, filterProperty, general }) => {
  const handleFilterChange = (e) => {
    const value = e.target.value;
    const updatedFilters = { ...filters, [filterProperty]: value };
    setFilters(updatedFilters);

    const filteredRooms = rooms.filter(room => {
      return Object.keys(updatedFilters).every(key => {
        return updatedFilters[key] === "all" || String(room[key]) === String(updatedFilters[key]);
      });
    });

    setFilteredRooms(filteredRooms);
  };

  // Obtener valores únicos para el filtro
  const uniqueValues = [...new Set(rooms.map(room => room[filterProperty]))].sort((a, b) => {
    if (typeof a === 'number') {
      return a - b; // Orden numérico
    } else {
      return a.localeCompare(b); // Orden alfabético
    }
  });

  return (
    <div className="filter-container">
      <select className="filter-select" onChange={handleFilterChange} value={filters[filterProperty] || "all"}>
        <option value="all">{general}</option>
        {uniqueValues.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Filter };
