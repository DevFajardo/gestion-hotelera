import Cards from "./components/cardMain";
import handler from "@/app/actions/actions";

export default async function Limpieza() {

    const habitaciones = await handler();

    return(
        <>
        <Cards habitaciones={habitaciones}/>
        </>
    )

}