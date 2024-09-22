import { sql } from "@/app/api/lib/bd";
import { messages } from "@/utils/messages";
import { NextResponse } from "next/server";
import { setCookie } from "nookies";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if ((!username, !password)) {
      return NextResponse.json([{ message: messages.error.needProps }]);
    }

    const response =
      await sql`SELECT * FROM empleado WHERE usuario = ${username}`;
    const { usuario, contraseña } = response[0];

    if (username == usuario && password == contraseña) {
      return NextResponse.json({ message: messages.succes.sessionInit });
    } else {
      return NextResponse.json({ message: messages.error.credentialsError });
    }
  } catch (error) {
    return NextResponse.json({ message: messages.error.defaultError });
  }
}
