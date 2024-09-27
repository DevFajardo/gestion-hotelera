export async function loginHandler(ruta, body, metodo, router) {
  try {
    const request = await fetch(ruta, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const response = await request.json();
    if (response.status == "ok") {
      router.push("/pages/dashboard");
    }
    return response;
  } catch (error) {
    throw new Error("Error al iniciar la sesion");
  }
}
export async function logoutHandler(router) {
  try {
    const peticion = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await peticion.json();
    if (data.status == "ok") {
      router.push("/");
    }
  } catch (error) {
    throw new Error("Error al cerrar la sesion");
  }
}

export async function peticionGet(url) {
  const peticion = await fetch(url);
  const data = await peticion.json();
  return data;
}
