import { AddIcon } from "./icons/AddIcon"

function CreateTodoButton() {
  return (
    <button 
      className="
        flex items-center justify-center gap-1 text-base font-bold py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all
      "
      onClick={() => console.log("Le diste click")}
      >
      Agregar tarea<i><AddIcon color="#ffffff"/></i>
    </button>
  )
}

export { CreateTodoButton }