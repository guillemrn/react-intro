function TodoError() {
  return (
    <div className="flex items-center justify-center mt-20 flex-col gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 fill-rose-500">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
      </svg>
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-700 text-center text-xl mb-2 dark:text-white">Ha ocurrido un error, por favor intenta de nuevo</p>
        <button className="flex items-center justify-center gap-1 text-base font-bold py-2 px-4 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-100 transition-all" onClick={() => window.location.reload(false)}>
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}

export { TodoError }