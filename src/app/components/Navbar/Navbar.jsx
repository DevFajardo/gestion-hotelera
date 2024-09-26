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
            <select id="filtro" className={style.filtro}>
            <option value="" disabled selected>Opciones</option>
                <option value="reservas">Habitaciones</option>
                <option value="ocupadas">Trabajadores</option>
                <option value="disponibles">Cocina</option>
                <option value="disponibles">Limpieza</option>
                <option value="disponibles">Reservas</option>
            </select>
            <div className={style.divPerfilContainer}>
            <div className={style.divPerfil}>
        <p className={style.nombre}>{nombre}</p>
        <p className={style.Rol}>{rol}</p>
      </div>
      <Button className={style.button}></Button>
            </div>
      
    </div>
  );
}
