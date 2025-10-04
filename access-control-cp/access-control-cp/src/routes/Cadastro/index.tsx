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
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Cadastro
        </h2>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Nome</label>
          <input
            {...register("nome", { required: "Nome é obrigatório" })}
            className={`p-3 rounded-md border ${
              errors.nome ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Digite seu nome"
          />
          {errors.nome && (
            <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Nome de Usuário</label>
          <input
            {...register("nomeUsuario", {
              required: "Nome de usuário é obrigatório",
            })}
            className={`p-3 rounded-md border ${
              errors.nomeUsuario ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Digite seu nome de usuário"
          />
          {errors.nomeUsuario && (
            <p className="text-red-500 text-sm mt-1">
              {errors.nomeUsuario.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Email</label>
          <input
            {...register("email", {
              required: "Email é obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            })}
            className={`p-3 rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Digite seu email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          Cadastrar
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-blue-500 hover:underline mt-2 text-center"
        >
          Voltar para Login
        </button>
      </form>
    </main>
  );
}
