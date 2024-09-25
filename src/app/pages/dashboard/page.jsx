import Cards from "./components/cardMain";
import handler from "@/app/actions/actions";

export default async function Dashboard() {
  //llamamos la funcion handler importada de actions para traer a este componente la lista de las habitaciones
  const habitaciones = await handler();
  return (
    <>
    <Cards habitaciones={habitaciones} />
    </>
  );
}
