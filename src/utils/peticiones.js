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

export async function fetchHabitaciones() {
  try {
    const response = await fetch("http://localhost:3000/api/data/habitaciones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const habitaciones = await response.json();
      return habitaciones;
    } else {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error al obtener las habitaciones:", error);
    throw new Error(`Error al obtener las habitaciones: ${error.message}`);
  }
}

