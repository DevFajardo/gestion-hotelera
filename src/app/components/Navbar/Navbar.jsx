import style from "./Navbar.module.css" 
export default function Navbar( ){
    return ( 
     <div className={style.divNavBar}>
        <img className={style.logo} src="/Logo//HOTELELGIRASOL.jpg" alt="Logo Hotel" /> 
        <button className={style.reservas}>RESERVAS</button> 
        <button className={style.ocupadas}>OCUPADAS</button> 
        <button className={style.disponibles}>DISPONIBLES</button> 
        <div className={style.divPerfil}> 
            <p className={style.nombre}>Alejandro</p> 
            <p className={style.Rol}>RECEPCIONISTA</p> 
        </div> 
     </div> 
    ) 
}