import { useState } from "react";

export default function useLoginState() {
    const [data, setData] = useState({ username: '', password: '', error: null });

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        if (!data.username || !data.password) {
            setData({ ...data, error: 'Todos los campos son obligatorios' });
        } else {
            setData({ ...data, error: null });
            // Aquí podrías añadir la lógica para enviar la información
        }
    }


    return { data, handleData, handleSubmit };
}