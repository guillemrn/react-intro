function TodoLoading() {
  return (
    <div className="flex gap-4 flex-col my-4">
      <div className="bg-slate-200 dark:bg-slate-800 w-full h-20 rounded-xl animate-pulse"></div>
      <div className="bg-slate-200 dark:bg-slate-800 w-full h-20 rounded-xl animate-pulse"></div>
      <div className="bg-slate-200 dark:bg-slate-800 w-full h-20 rounded-xl animate-pulse"></div>
      <div className="bg-slate-200 dark:bg-slate-800 w-full h-20 rounded-xl animate-pulse"></div>
      <div className="bg-slate-200 dark:bg-slate-800 w-full h-20 rounded-xl animate-pulse"></div>
    </div>
  )
}

export { TodoLoading }