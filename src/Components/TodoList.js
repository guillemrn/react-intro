function TodoList({ children }) {
  return (
    <ul className="flex gap-4 flex-col my-4">
      {children}
    </ul>
  )
}

export { TodoList }