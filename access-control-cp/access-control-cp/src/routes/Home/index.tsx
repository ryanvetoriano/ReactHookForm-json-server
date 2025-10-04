import { useNavigate } from "react-router-dom";

export default function Home() {
  const user = localStorage.getItem("loggedUser");
  const parsedUser = user ? JSON.parse(user) : null;
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Home</h1>

        {parsedUser ? (
          <p className="text-gray-700 text-lg">
            Bem-vindo, <b className="text-blue-500">{parsedUser.nome}</b> (
            {parsedUser.email})
          </p>
        ) : (
          <p className="text-gray-500 text-lg">Você não está logado.</p>
        )}

        <button
          onClick={() => {
            localStorage.removeItem("loggedUser");
            navigate("/");
          }}
          className="bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition"
        >
          Sair
        </button>
      </div>
    </main>
  );
}
