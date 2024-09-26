import KitchenService from "./components/KitchenMain";

export default function cocina(){
    const rooms = [
        { numero: "#30", piso: 2, cantidad: 2, estado: true },
        { numero: "#35", piso: 2, cantidad: 2, estado: true },
        { numero: "#26", piso: 2, cantidad: 2, estado: true },
        { numero: "#14", piso: 2, cantidad: 2, estado: true },
        { numero: "#18", piso: 2, cantidad: 2, estado: true },
        { numero: "#40", piso: 2, cantidad: 2, estado: true },
        { numero: "#02", piso: 2, cantidad: 2, estado: true }
        // Puedes agregar más habitaciones
      ];
      
    return(
        <KitchenService reserva_habitacion={rooms}/>
    )
}