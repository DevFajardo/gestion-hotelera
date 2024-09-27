import Cards from "./components/cardMain";
import { peticionGet } from "@/utils/peticiones";
export default async function Limpieza() {
  const habitaciones = await peticionGet(
    "http://localhost:3000/api/habitaciones"
  );
  return (
    <>
      <Cards habitaciones={habitaciones} />
    </>
  );
}
