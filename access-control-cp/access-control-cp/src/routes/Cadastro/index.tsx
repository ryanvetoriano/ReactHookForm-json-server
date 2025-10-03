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

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro</h2>
        <div>
          <label>Nome</label>
          <input {...register("nome", { required: "Nome é obrigatório" })} />
          {errors.nome && <p>{errors.nome.message}</p>}
        </div>
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
        <button type="submit">Cadastrar</button>
        <br />
        <button type="button" onClick={() => navigate("/")}>
          Voltar para Login
        </button>
      </form>
    </main>
  );
}
