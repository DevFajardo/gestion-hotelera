import Cards from "./components/cardMain";
import { habitacionesGet } from "@/utils/peticiones";
export default async function Limpieza() {
    const habitaciones = await habitacionesGet();
    return(
        <>
        <Cards habitaciones={habitaciones}/>
        </>
    )

}