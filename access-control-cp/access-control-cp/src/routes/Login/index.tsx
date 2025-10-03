import { useForm } from "react-hook-form";
import type { TipoLogin } from "../../types/tipoLogin";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TipoLogin>();

  return <main></main>;
}
