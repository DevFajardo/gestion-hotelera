import { NextResponse } from "next/server";
import { sql } from "@/app/api/lib/bd";

export async function GET() {
  try {
    const response =
      await sql`SELECT h.n_identificacion as identificacion, h.nombre, h.apellido, h.telefono, res.codigo as codigo, res.fecha_hora_entrada as fechaLlegada, res.fecha_hora_salida as fechaSalida, res.estado_de_reserva as estado, res.cantidad_de_platos, hab.numero as numero_habitacion, hab.piso as piso, f.total, f.descuento, f.estado_de_pago as pago from huesped_reserva r inner join huesped h on r.id_huesped = h.id inner join reserva res on r.id_reserva = res.id inner join habitacion hab on res.id_habitacion = hab.id inner join factura as f on f.id_reserva = res.id;`;
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
