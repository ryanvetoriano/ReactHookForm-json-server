export default function Home() {
  const user = localStorage.getItem("loggedUser");
  const parsedUser = user ? JSON.parse(user) : null;

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
      </div>
    </main>
  );
}
