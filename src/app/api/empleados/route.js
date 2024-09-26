import { NextResponse } from "next/server";
import { sql } from "@/app/api/lib/bd";

export async function GET() {
  try {
    const response =
      await sql`SELECT e.nombre, e.apellido, e.usuario, e.contraseña, e.telefono ,r.rol from empleado e inner join rol r on e.id_rol = r.id`;
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
