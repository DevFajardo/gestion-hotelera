'use client'
import { ContextEmpleadosProvider } from "./ContextEmpleados";
import EmpleadosTable from "./EmpleadosTable";
export default function EmpleadosMain({ Empleados }) {
    return (
        <ContextEmpleadosProvider>
            <EmpleadosTable Empleados={Empleados}/>
        </ContextEmpleadosProvider>
    );
}