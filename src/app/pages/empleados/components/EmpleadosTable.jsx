import useContextEmpleado from "./ContextEmpleados";
import "../styles/EmpleadosTable.css";
import EmpleadoModal from "./Modal";
import { useEffect } from "react";
import {
  getEmpleados,
  peticionCreateOrUpdate,
  peticionDelete,
} from "@/utils/peticiones";
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

  const handleAgregarEmpleado = async (nuevoEmpleado) => {
    const {
      action,
      tipo_identificacion,
      identificacion,
      nombre,
      apellido,
      telefono,
      direccion,
      usuario,
      contraseña,
      rol,
      estado,
    } = nuevoEmpleado;

    const body = {
      action: action,
      created_at: "NOW()",
      tipo_identificacion: tipo_identificacion,
      n_identificacion: identificacion,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      direccion: direccion,
      usuario: usuario,
      contraseña: contraseña,
      id_rol: rol,
      estado: estado,
    };
    console.log(body);
    if (action == "Crear") {
      try {
        if (rol == 1) {
          nuevoEmpleado.rol = "administrador";
        } else if (rol == 2) {
          nuevoEmpleado.rol = "cocinero";
        } else if (rol == 3) {
          nuevoEmpleado.rol = "limpieza";
        } else if (rol == 4) {
          nuevoEmpleado.rol = "recepcionista";
        }
        const response = await peticionCreateOrUpdate("/api/empleados", body);
        setEmpleados([...empleados, nuevoEmpleado]);
        console.log(response);
      } catch (error) {
        throw new Error(error);
      }
    } else {
      try {
        if (rol == 1) {
          nuevoEmpleado.rol = "administrador";
        } else if (rol == 2) {
          nuevoEmpleado.rol = "cocinero";
        } else if (rol == 3) {
          nuevoEmpleado.rol = "limpieza";
        } else if (rol == 4) {
          nuevoEmpleado.rol = "recepcionista";
        }

        const response = await peticionCreateOrUpdate("/api/empleados", body);
        const index = empleados.findIndex(
          (empleado) => empleado.identificacion == identificacion
        );
        empleados[index] = nuevoEmpleado;
        setEmpleados([...empleados]);
        console.log(response);
      } catch (error) {
        throw new Error(error);
      }
    }
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
