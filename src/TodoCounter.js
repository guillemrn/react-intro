function TodoCounter({ total, completed }) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-wide my-3 text-slate-900">
        ¡Simplifica tu vida con <span className="italic text-blue-500">TodoList app</span>! Organiza y completa tareas fácilmente.
      </h1>
      <h2 className="text-slate-700 text-xl mb-4">
        Has completado <span className="font-bold italic">{completed}</span> de <span className="font-bold italic">{total}</span> TODOS
      </h2>
    </div>
    
  )
}

export { TodoCounter }