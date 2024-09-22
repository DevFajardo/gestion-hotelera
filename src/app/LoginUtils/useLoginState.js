import { useState } from "react";

export default function useLoginState() {
  const [data, setData] = useState({ username: "", password: "", error: null });

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      setData({ ...data, error: "Todos los campos son obligatorios" });
    } else {
      setData({ ...data, error: null });
      const body = {
        username : data.username,
        password : data.password
      };
      const request = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const response = await request.json();
      console.log(response);
    }
  };

  return { data, handleData, handleSubmit };
}
