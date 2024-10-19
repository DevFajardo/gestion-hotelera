import { peticionGet } from "@/utils/peticiones";
import KitchenService from "./components/KitchenMain";

export default async function cocina() {
  const rooms = await peticionGet("http://localhost:3000/api/cocina");
  console.log(rooms)
  return <KitchenService reserva_habitacion={rooms} />;
}
