"use client";
import { useState } from "react";
import style from "./Menu.module.css";
import Button from "../ButtonSalir/Button";
import Link from "next/link";
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.menuContainer}>
      <button onClick={toggleMenu} className={style.menuButton}>
        <img src="/icons/menu.png" alt="Menu" className={style.menuIcon} />
      </button>

      {isOpen && (
        <div className={style.dropdownMenu}>
          <ul>
            <li>
            <Link className={style.Link} href={"/pages/dashboard"}>
              Habitaciones
            </Link>
            </li>
            <li>
            <Link className={style.Link} href={"/pages/empleados"}>
              Trabajadores
            </Link>
            </li>
            <li>
            <Link className={style.Link} href={"/pages/cocina"}>
              cocina
            </Link>
            </li>
            <li>
            <Link className={style.Link} href={"/pages/limpieza"}>
              limpieza
            </Link>
            </li>
            <li>
            <Link className={style.Link} href={"/pages/reserva/reservas"}>
              reservas
            </Link>
            </li>
            
            <hr />
            <div className={style.centeredButton}>
              <Button />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
