import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStoraje';

// const defaultTodos = [
//   { text: "Hacer tarea", completed: false },
//   { text: "Hacer de comer", completed: true },
//   { text: "Curso react", completed: false },
//   { text: "Crear dieta", completed: true },
//   { text: "Jugar con max", completed: false },
//   { text: "Usar estados derivados", completed: true },
//   { text: "Jugar con maggie", completed: true }
// ]

// localStorage.setItem(itemName, JSON.stringify(defaultTodos))
// localStorage.removeItem('TodoMachine_V1')


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TodoMachine_V1', [])
  const [searchValue, setSearchValue] = React.useState("")

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )


  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const createdDate = Date.now()

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      createdDate={createdDate}
    />
  )
  
}

export default App;
