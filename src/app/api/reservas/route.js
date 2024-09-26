import { NextResponse } from "next/server";
import { sql } from "@/app/api/lib/bd";

export async function GET() {
  try {
    const response =
      await sql`SELECT h.n_identificacion, h.nombre, h.apellido, h.telefono, res.codigo as codigo_reserva, res.fecha_hora_entrada, res.fecha_hora_salida, res.estado_de_reserva, res.cantidad_de_platos, hab.numero as numero_habitacion, hab.piso as piso_habitacion from huesped_reserva r inner join huesped h on r.id_huesped = h.id inner join reserva res on r.id_reserva = res.id inner join habitacion hab on res.id_habitacion = hab.id`;
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
