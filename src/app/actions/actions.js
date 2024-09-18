"use server";
import { neon } from "@neondatabase/serverless";

// guardamos en la variable sql la variable de entorno con la url de la base de datos
const sql = neon(process.env.DATABASE_URL);

// funcion que maneja la llamada y respuesta de la bd
export default async function handler() {
  //mandamos la query a la bd
  const response = await sql`SELECT * from habitacion`;
  //retornamos la respuesta
  return response;
}
