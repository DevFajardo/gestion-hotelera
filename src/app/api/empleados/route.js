import { NextResponse } from "next/server";
import { sql } from "@/app/api/lib/bd";
import { messages } from "@/utils/messages";

export async function GET() {
  try {
    const response =
      await sql`SELECT e.n_identificacion as identificacion,e.tipo_identificacion as tipo_identificacion,e.nombre, e.apellido, e.usuario, e.contraseña, e.direccion, e.telefono, r.rol, e.estado from empleado e inner join rol r on e.id_rol = r.id`;
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { identificacion } = body;
    if (identificacion) {
      const response =
        await sql`DELETE from empleado where n_identificacion = ${identificacion}`;
      if (response) {
        return NextResponse.json({ message: messages.succes.deleteSucces });
      } else {
        return NextResponse.json({
          message: messages.error.notFoundCredentials,
        });
      }
    }
  } catch (error) {
    return NextResponse.json({ message: messages.error.defaultError });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (body) {
      const {
        created_at,
        tipo_identificacion,
        n_identificacion,
        nombre,
        apellido,
        telefono,
        direccion,
        usuario,
        contraseña,
        id_rol,
        estado,
      } = body;
      const review =
        await sql`SELECT n_identificacion from empleado where n_identificacion = ${n_identificacion}`;
      if (review[0] == null) {
        const create =
          await sql`INSERT INTO "public"."empleado" ("created_at", "tipo_identificacion", "n_identificacion", "nombre", "apellido", "telefono", "direccion", "usuario", "contraseña", "id_rol", "estado") VALUES ( ${created_at}, ${tipo_identificacion}, ${n_identificacion}, ${nombre}, ${apellido}, ${telefono}, ${direccion}, ${usuario}, ${contraseña}, ${id_rol}, ${estado})`;
        return NextResponse.json({ message: messages.succes.createSucces });
      } else {
        return NextResponse.json({
          message: messages.error.duplicateIdentification,
        });
      }
    }
  } catch (error) {
    return NextResponse.json({ message: messages.error.defaultError });
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    if (body) {
      const {
        tipo_identificacion,
        n_identificacion,
        nombre,
        apellido,
        telefono,
        direccion,
        usuario,
        contraseña,
        id_rol,
        estado,
      } = body;
      const review =
        await sql`SELECT n_identificacion from empleado where n_identificacion = ${n_identificacion}`;
      if (review[0] != null) {
        const update =
          await sql`UPDATE "public"."empleado" SET "tipo_identificacion" = ${tipo_identificacion}, "nombre" = ${nombre}, "apellido" = ${apellido}, "telefono" = ${telefono}, "direccion" = ${direccion}, "usuario" = ${usuario}, "contraseña" = ${contraseña}, "id_rol" = ${id_rol}, "estado" = ${estado} WHERE "n_identificacion" = ${n_identificacion}`;
        return NextResponse.json({ message: messages.succes.updateSucces });
      } else {
        return NextResponse.json({
          message: messages.error.notFoundCredentials,
        });
      }
    }
  } catch (error) {
    return NextResponse.json({ message: messages.error.defaultError });
  }
}
