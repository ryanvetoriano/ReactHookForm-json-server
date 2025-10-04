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
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

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
          Entrar
        </button>

        <button
          type="button"
          onClick={() => navigate("/cadastro")}
          className="text-blue-500 hover:underline mt-2 text-center"
        >
          Ir para Cadastro
        </button>
      </form>
    </main>
  );
}
