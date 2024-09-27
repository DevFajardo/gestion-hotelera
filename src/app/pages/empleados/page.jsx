import EmpleadosMain from "./components/usingContext";
export default function Empleados() {
    const Empleado = [{
        nombre: "Juan",
        apellido: "Perez",
        rol: "limpieza",
        telefono: "12345678",
        correo: "Juan@gmail.com",
        tipo_identificacion: "CC",
        identificacion: "12345678",
        usuario : "juanperez",
        contraseña: "123456",
        estado: "activo"
    },{
        nombre: "Maria",
        apellido: "Gomez",
        rol: "limpieza",
        telefono: "12345678",
        correo:"maria@gmail",
        tipo_identificacion: "CC",
        identificacion: "12345677",
        usuario : "mariagomez",
        contraseña: "123456",
        estado: "activo"
    },{
    nombre: "Pedro",
    apellido: "Gomez",
    rol: "limpieza",
    telefono: "12345678",
    correo:"pedro@gmail",
    tipo_identificacion: "CE",
    identificacion: "123456769",
    usuario : "pedrogomez",
    contraseña: "123456",
    estado: "activo"
    }];
    return (
        <>
        <EmpleadosMain Empleados={Empleado} />
        </>
    );
    }