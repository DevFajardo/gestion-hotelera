import { NextResponse } from "next/server";
import { sql } from "@/app/api/lib/bd";

export async function GET() {
  try {
    const response =
      await sql`SELECT h.id ,h.numero, h.piso, h.detalle_habitacion, th.nombre, (string_to_array(eh.nombre, 'y'))[1] as estado_limpieza, (string_to_array(eh.nombre, 'y'))[2] as estado_disponibilidad  from habitacion h inner join tipo_habitacion th on h.id_tipo_habitacion = th.id inner join estado_habitacion eh on h.id_estado_habitacion = eh.id`;
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
