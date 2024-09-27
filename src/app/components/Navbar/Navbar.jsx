import getCookie from "@/utils/cookies";
import style from "./Navbar.module.css";
import Menu from "./ui/Menu/Menu";
export default function Navbar() {
  const { nombre, rol } = getCookie("auth_cookie");

  return (
    <div className={style.divNavBar}>
      <img
        className={style.logo}
        src="/Logo/HOTELELGIRASOL.jpg"
        alt="Logo Hotel"
      />

      <div className={style.divPerfilContainer}>
        <div className={style.divPerfil}>
          <p className={style.nombre}>{nombre}</p>
          <p className={style.Rol}>{rol}</p>
        </div>
        <Menu/>
      </div>
    </div>
  );
}
