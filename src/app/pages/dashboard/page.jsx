import { peticionGet } from "@/utils/peticiones";
import Cards from "./components/cardMain";

export default async function Recepcionista() {
  //llamamos la funcion handler importada de actions para traer a este componente la lista de las habitaciones
  const habitaciones = await peticionGet(
    "http://localhost:3000/api/habitaciones"
  );
  return (
    <>
      <Cards habitaciones={habitaciones} />
    </>
  );
}
