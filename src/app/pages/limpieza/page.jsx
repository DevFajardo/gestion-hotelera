import Cards from "./components/cardMain";
import { fetchHabitaciones } from "@/utils/peticiones";
export default async function Limpieza() {

    const habitaciones = await fetchHabitaciones();
    return(
        <>
        <Cards habitaciones={habitaciones}/>
        </>
    )

}