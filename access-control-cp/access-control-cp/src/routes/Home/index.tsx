

export default function Home() {
  const user = localStorage.getItem("loggedUser");
  const parsedUser = user ? JSON.parse(user) : null;

  return <main></main>;
}
