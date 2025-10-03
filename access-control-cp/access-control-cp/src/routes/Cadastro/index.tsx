import { useForm } from "react-hook-form";
import type { User } from "../../types/tipoUsuario";

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = async (data: User) => {};

  return <main></main>;
}
