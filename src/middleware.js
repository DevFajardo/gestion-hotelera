import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("auth_cookie");
  if (!hasCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    try {
      const auth_token = cookieStore.get("auth_cookie").value;
      const { payload } = await jwtVerify(auth_token, new TextEncoder().encode('secret'));
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: "/pages/:path*",
};
