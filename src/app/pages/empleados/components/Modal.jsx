import { useState, useEffect } from "react";
import Modal from "react-modal";
import '../styles/ModalEmpleado.css';

const EmpleadoModal = ({ isOpen, setIsOpen, onAgregarEmpleado, empleado }) => {
    // Estado para manejar el nuevo empleado
    const [nuevoEmpleado, setNuevoEmpleado] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        rol: '',
        telefono: '',
        tipo_identificacion: '',
        identificacion: '',
        usuario: '',
        contraseña: '',
        created_at: '',
        estado: true,
        action: ''
    });

    useEffect(() => {
        Modal.setAppElement('#modal-root');
    }, []);

    // Efecto que carga el empleado en el estado cuando se abre el modal
    useEffect(() => {
        if (isOpen) {
            if (empleado) {
                // Carga los datos del empleado en el estado solo si el modal está abierto y hay un empleado seleccionado
                setNuevoEmpleado(empleado);
            } else {
                // Reinicia el estado para añadir un nuevo empleado
                setNuevoEmpleado({
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    rol: '',
                    telefono: '',
                    tipo_identificacion: '',
                    identificacion: '',
                    usuario: '',
                    contraseña: '',
                    created_at: '',
                    estado: true,
                    action: ''
                });
            }
        } else {
            // Reiniciar el estado al cerrar el modal
            setNuevoEmpleado({
                nombre: '',
                apellido: '',
                direccion: '',
                rol: '',
                telefono: '',
                tipo_identificacion: '',
                identificacion: '',
                usuario: '',
                contraseña: '',
                created_at: '',
                estado: true,
                action: ''
            });
        }
    }, [isOpen, empleado]);

    const handleChange = (e) => {
        setNuevoEmpleado({
            ...nuevoEmpleado,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Solo añade created_at si el empleado es nuevo (no existe un empleado seleccionado)
        const empleadoConFecha = empleado 
        ? { ...nuevoEmpleado, action: 'Actualizar' } // Si estás editando, solo pasas los datos del empleado
        : { ...nuevoEmpleado, created_at: 'NOW()', action: 'Crear' }; // Si estás agregando, añade la fecha
        onAgregarEmpleado(empleadoConFecha); // Llama a la función para agregar o actualizar el empleado
        setIsOpen(false); // Cierra el modal después de agregar o actualizar
    };

    const handleClose = () => {
        setIsOpen(false); // Cierra el modal
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="nombre">Nombre</label>
                    <input className='inputs' type="text" id="nombre" name="nombre" value={nuevoEmpleado.nombre} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="apellido">Apellido</label>
                    <input className='inputs' type="text" id="apellido" name="apellido" value={nuevoEmpleado.apellido} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="rol">Rol</label>
                    <input className='inputs' type="text" id="rol" name="rol" value={nuevoEmpleado.rol} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="direccion">Dirección</label>
                    <input className='inputs' type="text" id="direccion" name="direccion" value={nuevoEmpleado.direccion} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="telefono">Teléfono</label>
                    <input className='inputs' type="text" id="telefono" name="telefono" value={nuevoEmpleado.telefono} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="tipo_identificacion">Tipo de Identificación</label>
                    <select
                        id="tipo_identificacion"
                        name="tipo_identificacion"
                        value={nuevoEmpleado.tipo_identificacion}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona un tipo</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="CE">Cédula de Extranjería</option>
                        <option value="PASS">Pasaporte</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="identificacion">Identificación</label>
                    <input className='inputs' type="text" id="identificacion" name="identificacion" value={nuevoEmpleado.identificacion} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="usuario">Usuario</label>
                    <input className='inputs' type="text" id="usuario" name="usuario" value={nuevoEmpleado.usuario} onChange={handleChange} required />
                </div>
                <div className="input-container">
                    <label htmlFor="contraseña">Contraseña</label>
                    <input className='inputs' type="text" id="contraseña" name="contraseña" value={nuevoEmpleado.contraseña} onChange={handleChange} required />
                </div>

                <div className="buttons-container">
                    <button type="button" onClick={handleClose}>Cancelar</button>
                    <button type="submit">{empleado ? "Actualizar Trabajador" : "Agregar Trabajador"}</button>
                </div>
            </form>
        </Modal>
    );
};

export default EmpleadoModal;
