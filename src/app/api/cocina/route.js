import { NextResponse } from "next/server";
import { sql } from "@/app/api/lib/bd";

export async function GET() {
  try {
    const response =
      await sql`SELECT hab.numero as numero, hab.piso as piso, res.cantidad_de_platos as cantidad from huesped_reserva r inner join huesped h on r.id_huesped = h.id inner join reserva res on r.id_reserva = res.id inner join habitacion hab on res.id_habitacion = hab.id`;
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
