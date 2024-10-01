import useContextEmpleado from "./ContextEmpleados";
import { useEffect } from "react";
import EmpleadoModal from "./Modal";
import "../styles/EmpleadosTable.css";
import { getEmpleados, peticionDelete } from "@/utils/peticiones";

export default function EmpleadosTable() {
  const {
    empleados,
    setEmpleados,
    empleadoSeleccionado,
    setEmpleadoSeleccionado,
    isOpen,
    setIsOpen,
    edicion,
    setEdicion,
  } = useContextEmpleado();

  useEffect(() => {
    getEmpleados(setEmpleados);
  }, []);

  const handleAgregarEmpleado = (nuevoEmpleado) => {
    console.log(nuevoEmpleado);
    //funciona
  };

  const handleOpenModal = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setEdicion(true);
    setIsOpen(true);
  };

  const handleEliminarEmpleado = async (identificacion) => {
    const body = { identificacion: identificacion };
    const response = await peticionDelete("/api/empleados", body);
    setEmpleados(
      empleados.filter((empleado) => empleado.identificacion !== identificacion)
    );
    console.log(response);
  };

  return (
    <div className="container">
      <button
        className="button-empleados"
        onClick={() => {
          setEmpleadoSeleccionado(null);
          setIsOpen(true);
          setEdicion(false);
        }}
      >
        +
      </button>
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
              <td>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEliminarEmpleado(empleado.identificacion);
                  }}
                  className="trash-icon"
                ></div>
              </td>
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
