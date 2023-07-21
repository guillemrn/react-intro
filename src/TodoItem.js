import { CheckIcon } from "./icons/CheckIcon"
import { XIcon } from "./icons/XIcon"

const todayDate = Date.now();

function TodoItem(props) {
  const currentDate = new Date(todayDate)

  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  return (
    <li className="bg-white rounded-xl flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <i>
          {props.completed ? <CheckIcon color="#3b82f6" /> : <div className="todo-item" onClick={props.onComplete}></div> }
        </i>
        {/* <i>< {props.completed}</i> */}
        <div className="flex flex-col">
          <span className={`text-lg text-slate-900 ${props.completed && "line-through decoration-slate-900"}`}>{props.text}</span>
          <span className="text-xs text-slate-500">
            
            {props.completed ? `Completado el ${day}/${month}/${year}` : `Creado el ${day}/${month}/${year}` }
          </span>
        </div>
      </div>
      <button className="button-delete" onClick={props.onDelete}>
        <XIcon />
      </button>
    </li>
  )
}

export { TodoItem }