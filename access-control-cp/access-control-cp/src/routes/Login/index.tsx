import { useForm } from "react-hook-form";
import type { TipoLogin } from "../../types/tipoLogin";
import type { User } from "../../types/tipoUsuario";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TipoLogin>();

  const onSubmit = async (data: User) => {};
  
  return <main></main>;
}
