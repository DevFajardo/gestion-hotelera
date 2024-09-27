import { peticionGet } from "@/utils/peticiones";
import EmpleadosMain from "./components/usingContext";
export default async function Empleados() {
  const Empleado = await peticionGet("http://localhost:3000/api/empleados");
  return (
    <>
      <EmpleadosMain Empleados={Empleado} />
    </>
  );
}
