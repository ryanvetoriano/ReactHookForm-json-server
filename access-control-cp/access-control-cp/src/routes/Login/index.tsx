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

  const onSubmit = async (data: TipoLogin) => {
    const res = await fetch(
      `http://localhost:3001/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`
    );
    const users: User[] = await res.json();

    if (users.length === 0) {
      alert("Usuário ou email inválido!");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(users[0]));
    alert("Login realizado com sucesso!");
    navigate("/home");
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div>
          <label>Nome de Usuário</label>
          <input
            {...register("nomeUsuario", {
              required: "Nome de usuário é obrigatório",
            })}
          />
          {errors.nomeUsuario && <p>{errors.nomeUsuario.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email é obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit">Entrar</button>
        <br />
        <button type="button" onClick={() => navigate("/cadastro")}>
          Ir para Cadastro
        </button>
      </form>
    </main>
  );
}
