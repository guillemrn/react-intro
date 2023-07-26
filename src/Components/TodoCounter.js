import { LightIcon } from "../icons/LightIcon"
import { DarkIcon } from "../icons/DarkIcon"

function TodoCounter({ total, completed, todosCompleted }) {
  return (
    <div className="relative">
      {/* <div className="flex gap-2 absolute right-0 top-0">
        <LightIcon />
        <DarkIcon />
      </div> */}
      <h1 className="text-lg font-bold tracking-wide my-3 text-slate-900 dark:text-white lg:text-2xl">
        <span className="italic text-blue-500">TodoMachine</span>: Organiza y completa tus tareas sin esfuerzo.
      </h1>
      <h2 className="text-slate-700 text-md mb-4 dark:text-white">
        {
          todosCompleted ?
          ( `Felicidades! Completaste todas tus tareas.`)
          : ( <span>Has completado {<span className="font-bold italic">{completed}</span>} de {<span className="font-bold italic">{total}</span>} tareas</span> 
          )
        }
      </h2>
    </div>
    
  )
}

export { TodoCounter }