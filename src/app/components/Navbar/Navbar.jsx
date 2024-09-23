import getCookie from "@/utils/cookies";
import style from "./Navbar.module.css";
import Button from "./ui/Button";
export default function Navbar() {
  const { nombre, rol } = getCookie("auth_cookie");

  return (
    <div className={style.divNavBar}>
      <img
        className={style.logo}
        src="/Logo/HOTELELGIRASOL.jpg"
        alt="Logo Hotel"
      />
      <button className={style.reservas}>RESERVAS</button>
      <button className={style.ocupadas}>OCUPADAS</button>
      <button className={style.disponibles}>DISPONIBLES</button>
      <div className={style.divPerfil}>
        <p className={style.nombre}>{nombre}</p>
        <p className={style.Rol}>{rol}</p>
      </div>
      <Button />
    </div>
  );
}
