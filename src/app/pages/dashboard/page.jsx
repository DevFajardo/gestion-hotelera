import { habitacionesGet } from "@/utils/peticiones";
import Cards from "./components/cardMain";

export default async function Recepcionista() {
  //llamamos la funcion handler importada de actions para traer a este componente la lista de las habitaciones
  const habitaciones = await habitacionesGet();
  return (
    <>
    <Cards habitaciones={habitaciones} />
    </>
  );
}