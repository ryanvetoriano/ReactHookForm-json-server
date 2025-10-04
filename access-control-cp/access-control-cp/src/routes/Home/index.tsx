import { useNavigate } from "react-router-dom";

export default function Home() {
  const user = localStorage.getItem("loggedUser");
  const parsedUser = user ? JSON.parse(user) : null;
  const navigate = useNavigate()

  return (
    <main>
      <h1>Home</h1>
      <div>
        {parsedUser ? (
          <p>
            Bem-vindo, <b>{parsedUser.nome}</b> ({parsedUser.email})
          </p>
        ) : (
          <p>Você não está logado.</p>
        )}
        <button
          onClick={() => {
            localStorage.removeItem("loggedUser");
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>
    </main>
  );
}
