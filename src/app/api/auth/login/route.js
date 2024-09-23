import { messages } from "@/utils/messages";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/app/api/lib/bd";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if ((!username, !password)) {
      return NextResponse.json([{ message: messages.error.needProps }]);
    }

    const response =
      await sql`SELECT e.nombre, e.apellido, e.usuario, e.contraseña, r.rol from empleado e inner join rol r on e.id_rol = r.id where e.usuario = ${username}`;
    const { nombre, apellido, usuario, contraseña, rol } = response[0];

    if (username !== usuario || password !== contraseña) {
      return NextResponse.json({ message: messages.error.credentialsError });
    } else {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          nombre,
          apellido,
          usuario,
          rol,
        },
        "secret"
      );

      cookies().set("auth_cookie", token, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 30,
      });
      return NextResponse.json({
        message: messages.succes.sessionInit,
        status: "ok",
      });
    }
  } catch (error) {
    return NextResponse.json({ message: messages.error.credentialsError });
  }
}
