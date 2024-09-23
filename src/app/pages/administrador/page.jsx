import handler from "@/app/actions/actions";
import CardContent from "@/app/components/Cards/GlobalCard";

const Habitaciones = await handler();
export default function administrador() {
  
  return (
    <>
      {Habitaciones.map((habitacion) => {
        return <CardContent habitacion={habitacion} key = {habitacion.id}/>;
      })}
    </>
  );
}
