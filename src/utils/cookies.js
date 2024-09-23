import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export default function getCookie(nameCookie) {
  const cookieStore = cookies();
  const auth_token = cookieStore.get(nameCookie).value;
  if (!auth_token) {
    console.log("no existe el token");
  }

  const data = verify(auth_token, "secret");
  return data;
}
