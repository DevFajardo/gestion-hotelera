import { messages } from "@/utils/messages";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const cookieStore = cookies();
    const hasCookie = cookieStore.has("auth_cookie");
    if (!hasCookie) {
      return NextResponse.json({ message: messages.error.notFoundCookie });
    } else {
      cookies().delete("auth_cookie");
      return NextResponse.json({
        message: messages.succes.logoutSucces,
        status: "ok",
      });
    }
  } catch (error) {
    return NextResponse.json({ message: messages.error.defaultError });
  }
}
