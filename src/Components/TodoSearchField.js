import React from "react"

function TodoSearchField(props) {
  return (
    <input
      placeholder="Busca tu tarea aquí..."
      className="bg-white dark:bg-slate-900 border border-slate-400 p-2 text-slate-900 dark:text-white rounded-md active:border-blue-500 w-full md:w-80"
      value={props.searchValue}
      onChange={(event) => {
        props.setSearchValue(event.target.value)
      }}
    />
  )
}

export { TodoSearchField }