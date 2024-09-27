"use client";
import { useState } from "react";
import style from "./Menu.module.css";
import Button from "../ButtonSalir/Button";
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
            <li>Habitaciones</li>
            <li>Trabajadores</li>
            <li>Cocina</li>
            <li>Limpieza</li>
            <li>Reservas</li>
            <hr />
            <div className={style.centeredButton}>
              <Button></Button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
