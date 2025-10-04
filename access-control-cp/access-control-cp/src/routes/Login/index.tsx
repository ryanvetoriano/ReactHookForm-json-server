import { useForm } from "react-hook-form";
import type { TipoLogin } from "../../types/tipoLogin";
import type { User } from "../../types/tipoUsuario";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TipoLogin>();

  const navigate = useNavigate();

  const onSubmit = async (data: User) => {
    const res = await fetch(
      `http://localhost:3001/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`
    );
    const users: User[] = await res.json();

    if (users.length === 0) {
      alert("Usuário ou email inválido!");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(users[0]));
    navigate("/home");
  };

  return <main></main>;
}
