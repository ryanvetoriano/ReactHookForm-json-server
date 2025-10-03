import { useForm } from "react-hook-form";
import type { User } from "../../types/tipoUsuario";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const navigate = useNavigate();

  const onSubmit = async (data: User) => {
    const res = await fetch(
      `http://localhost:3001/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`
    );
    const users: User[] = await res.json();

    if (users.length > 0) {
      alert("Usuário ou email já cadastrados!");
      return;
    }

    await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return <main></main>;
}
