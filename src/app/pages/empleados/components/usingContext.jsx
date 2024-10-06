"use client";
import { ContextEmpleadosProvider } from "./ContextEmpleados";
import EmpleadosTable from "./EmpleadosTable";
export default function EmpleadosMain() {
  return (
    <ContextEmpleadosProvider>
      <EmpleadosTable />
    </ContextEmpleadosProvider>
  );
}
