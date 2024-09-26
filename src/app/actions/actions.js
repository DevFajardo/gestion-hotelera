"use server";
import { neon } from "@neondatabase/serverless";

// guardamos en la variable sql la variable de entorno con la url de la base de datos
const sql = neon(process.env.DATABASE_URL);

// funcion que maneja la llamada y respuesta de la bd
export default async function handler() {
  //mandamos la query a la bd
  const response = await sql`SELECT h.id ,h.numero, h.piso, h.detalle_habitacion, th.nombre, (string_to_array(eh.nombre, 'y'))[1] as estado_limpieza, (string_to_array(eh.nombre, 'y'))[2] as estado_disponibilidad  from habitacion h inner join tipo_habitacion th on h.id_tipo_habitacion = th.id inner join estado_habitacion eh on h.id_estado_habitacion = eh.id`;
  //retornamos la respuesta
  return response;
}
