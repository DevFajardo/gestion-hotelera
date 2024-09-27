import useContextEmpleado from "./ContextEmpleados";
import { useEffect } from 'react';
import EmpleadoModal from './Modal';
import '../styles/EmpleadosTable.css';

export default function EmpleadosTable({ Empleados }) {
    const { empleados, setEmpleados, empleadoSeleccionado, setEmpleadoSeleccionado, isOpen, setIsOpen, edicion, setEdicion } = useContextEmpleado();

    useEffect(() => {
        setEmpleados(Empleados);
    }, [setEmpleados, Empleados]);

    const handleAgregarEmpleado = (nuevoEmpleado) => {
        if (edicion) {
            setEmpleados((prevEmpleados) => prevEmpleados.map((empleado) =>
                empleado.identificacion === nuevoEmpleado.identificacion ? nuevoEmpleado : empleado
            ));
            setEdicion(false);
        } else {
            setEmpleados((prevEmpleados) => [...prevEmpleados, nuevoEmpleado]);
        }
        setIsOpen(false);
    };

    const handleOpenModal = (empleado) => {
        setEmpleadoSeleccionado(empleado);
        setEdicion(true);
        setIsOpen(true);
    };

    const handleEliminarEmpleado = (identificacion) => {
        setEmpleados((prevEmpleados) => prevEmpleados.filter((empleado) => empleado.identificacion !== identificacion));
    };

    return (
        <div className="container">
            <button className="button-empleados" onClick={() => { setEmpleadoSeleccionado(null); setIsOpen(true); setEdicion(false); }}>+</button>
            <table>
                <thead>
                    <tr>
                        <th>IDENTIFICACION</th>
                        <th>NOMBRE</th>
                        <th>ROL</th>
                        <th>TELEFONO</th>
                        <th>USUARIO</th>
                        <th>CONTRASEÑA</th>
                        <th>ESTADO</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado, index) => (
                        <tr onClick={() => handleOpenModal(empleado)} key={index}>
                            <td>{empleado.identificacion}</td>
                            <td>{`${empleado.nombre} ${empleado.apellido}`}</td>
                            <td>{empleado.rol}</td>
                            <td>{empleado.telefono}</td>
                            <td>{empleado.usuario}</td>
                            <td>{empleado.contraseña}</td>
                            <td>{empleado.estado == "true" ? "inactivo" : "activo"}</td>
                            <td><div onClick={(e) => { e.stopPropagation(); handleEliminarEmpleado(empleado.identificacion) }} className="trash-icon"></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <EmpleadoModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onAgregarEmpleado={handleAgregarEmpleado}
                empleado={empleadoSeleccionado}
            />
        </div>
    );
}
