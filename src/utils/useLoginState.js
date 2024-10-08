import { useState } from "react";
import { loginHandler } from "./peticiones";
import { useRouter } from "next/navigation";

export default function useLoginState() {
  const [data, setData] = useState({ username: "", password: "", error: null });
  const router = useRouter();

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      if (!data.username && data.password) {
        setData({ ...data, error: "Ingrese su nombre de usuario" });
      }
      else if (!data.password && data.username) {
        setData({ ...data, error: "Ingrese su contraseña" });
      }
      else if(!data.username && !data.password){
        setData({ ...data, error: "Ingrese su usuario y contraseña" });
      }
     else {
      setData({ ...data, error: null });
      const body = {
        username: data.username,
        password: data.password,
      };
      const ruta = "/api/auth/login";
      const metodo = "POST";
      const response = await loginHandler(ruta, body, metodo, router);
      console.log(response);
      
    }
  };

  return { data, handleData, handleSubmit };
}
