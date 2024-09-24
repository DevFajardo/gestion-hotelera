import handler from "@/app/actions/actions";
import Cards from "./components/cardMain";

export default async function Limpieza() {
    //llamamos la funcion handler importada de actions para traer a este componente la lista de las habitaciones
    const habitaciones = await handler();
    return (
        <>
        <Cards habitaciones={habitaciones} />
        </>
    );
}