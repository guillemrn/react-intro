function TodoCounter({ total, completed }) {
  return (
    <div>
      <h1 className="text-xl font-bold tracking-wide my-3 text-slate-900 lg:text-2xl">
        ¡Descubre la simplicidad de  <span className="italic text-blue-500">TodoMachine</span>: Organiza y completa tus tareas sin esfuerzo.
      </h1>
      <h2 className="text-slate-700 text-xl mb-4">
        Has completado <span className="font-bold italic">{completed}</span> de <span className="font-bold italic">{total}</span> TODOs
      </h2>
    </div>
    
  )
}

export { TodoCounter }