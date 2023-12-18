import { useForm } from "react-hook-form"
import {createMeet} from "../services/meets.service"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const MostrarPorConsola = async (data) => {
    const res = await createMeet(data);
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(MostrarPorConsola)}>
      <div>
        <label htmlFor="hour">Hora</label>
        <input autoComplete="off" {...register("hour", { required: true })} />
      </div>
      <div>
        <label htmlFor="date">Fecha</label>
        <input autoComplete="off" {...register("date", { required: true })} />
      </div>
      <div>
        <label htmlFor="motive">Motivo</label>
        <input autoComplete="off" {...register("motive", { required: true })} />
      </div>
      <div>
        <label htmlFor="state">Estado</label>
        <input autoComplete="off" {...register("state", { required: true })} />
      </div>
      <div>
        <label htmlFor="user">Usuario</label>
        <input autoComplete="off" {...register("user", { required: true })} />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}