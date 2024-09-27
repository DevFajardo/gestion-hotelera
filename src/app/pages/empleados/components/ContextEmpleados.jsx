import { useState, createContext, useContext } from 'react';

export const ContextEmpleados = createContext();

export const ContextEmpleadosProvider = ({ children }) => {
    const [empleados, setEmpleados] = useState([]); //estado de todos los empleados
    const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null); //estado por si se da click en un empleado
    const [isOpen, setIsOpen] = useState(false); // estado del modal
    const [edicion, setEdicion] = useState(false); // estado de edición

    return (
        <ContextEmpleados.Provider
            value={{
                empleados,
                setEmpleados,
                empleadoSeleccionado,
                setEmpleadoSeleccionado,
                isOpen,
                setIsOpen,
                edicion,
                setEdicion,
            }}
        >
            {children}
        </ContextEmpleados.Provider>
    );
};

export default function useContextEmpleado() {
    return useContext(ContextEmpleados);
}
