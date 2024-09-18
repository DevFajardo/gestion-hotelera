import Card from "./components/card";
import handler from "@/app/actions/actions";

export default async function Recepcionista() {
  //llamamos la funcion handler importada de actions para traer a este componente la lista de las habitaciones
  const habitaciones = await handler();
  return (
    <>
    {/* listamos las habitaciones mapeandolas una por una pasando sus caracteristicas al componente card */}
      {habitaciones.map((habitacion) => {
        return (
          <>
            <Card habitacion={habitacion} />
          </>
        );
      })}
    </>
  );
}
