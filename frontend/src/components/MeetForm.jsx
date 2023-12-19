import { useForm } from "react-hook-form"
import {createMeet} from "../services/meets.service"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const MostrarPorConsola = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'));
    data.user = user.id;
    data.state = "Pendiente";
    console.log(data);
    const res = await createMeet(data);

    console.log(res);
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit(MostrarPorConsola)} className="p-6 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-bold text-xl text-white">Agenda Tu Cita</h2>
          <p className="text-white mb-6">Rellena el formulario para coordinar con uno de nuestros inspectores.</p>

          <div className="bg-slate-200 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Información de Visita</p>
                <p>Por favor rellena todos los campos.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                  <div className="md:col-span-5">
                    <label htmlFor="motive">Motivo</label>
                    <input
                      autoComplete="off"
                      {...register("motive", { required: true })}
                      type="text"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="hour">Hora de Visita</label>
                    <input
                      autoComplete="off"
                      {...register("hour", { required: true })}
                      type="text"
                      pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
                      title="Formato válido: HH:MM"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label htmlFor="date">Fecha</label>
                    <input
                      autoComplete="off"
                      {...register("date", { required: true })}
                      type="text"
                      pattern="^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$"
                      title="Formato válido: DD/MM/AAAA"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="DD/MM/AAAA"
                    />
                  </div>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
          
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

/**
 * 
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
 */