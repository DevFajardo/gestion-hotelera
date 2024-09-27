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
            <Link className="link" href={"/pages/dashboard"}>
              Habitaciones
            </Link>
            <Link className="link" href={"/pages/empleados"}>
              Trabajadores
            </Link>
            <Link className="link" href={"/pages/cocina"}>
              cocina
            </Link>
            <Link className="link" href={"/pages/limpieza"}>
              limpieza
            </Link>
            <Link className="link" href={"/pages/reserva"}>
              reservas
            </Link>
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
