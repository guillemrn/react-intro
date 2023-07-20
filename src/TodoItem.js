import { CheckIcon } from "./icons/CheckIcon"
import { XIcon } from "./icons/XIcon"

const todayDate = Date.now();

function TodoItem(props) {
  const currentDate = new Date(todayDate)

  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  return (
    <li className="bg-white rounded-md flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <i><div className="todo-item"></div> {props.completed}</i>
        {/* <i><CheckIcon color="#3b82f6" /> {props.completed}</i> */}
        <div className="flex flex-col">
          <p className="text-lg">{props.text}</p>
          <span className="text-xs text-slate-500">Creado el {day}/{month}/{year}</span>
        </div>
      </div>
      <button className="button-delete">
        <XIcon />
      </button>
    </li>
  )
}

export { TodoItem }