import Cards from "./components/cardMain";
import { fetchHabitaciones } from "@/utils/peticiones";
export default async function Dashboard() {
  //llamamos la funcion handler importada de actions para traer a este componente la lista de las habitaciones 
  const habitaciones = await fetchHabitaciones();
  return (
    <>
    <Cards habitaciones={habitaciones} />
    </>
  );
}
