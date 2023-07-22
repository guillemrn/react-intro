import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearchField } from './TodoSearchField';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import Lottie from "lottie-react";
import ChecklistAnimation from './icons/ChecklistAnimation.json'

const defaultTodos = [
  { text: "Hacer tarea", completed: false },
  { text: "Hacer de comer", completed: true },
  { text: "Curso react", completed: false },
  { text: "Crear dieta", completed: true },
  { text: "Jugar con max", completed: false },
  { text: "Usar estados derivados", completed: true },
  { text: "Jugar con maggie", completed: true }
]


function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
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
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  const createdDate = Date.now()
  const style = {
    window
  }
  
  return (
    <div className='font-sans antialiased p-6'>
      <div>
        <TodoCounter
          completed={completedTodos}
          total={totalTodos}
          todosCompleted={completedTodos === totalTodos}
        />
        <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center'>
          <TodoSearchField
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {
            totalTodos === 0
            ? null
            : <CreateTodoButton />
          }
        </div>
      </div>
      
      {
        totalTodos === 0 
        ? <div className='max-w-md flex items-center justify-center flex-col my-0 mx-auto'>
          <Lottie
            animationData={ChecklistAnimation}
            loop={true}
          />
          <p className='text-slate-700 text-xl mb-2'>Agrega tu primera tarea para comenzar</p>
          <CreateTodoButton />
        </div>
        : <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                createdDate={createdDate}
              />
            ))}
          </TodoList>
      }




    </div>
  );
}

export default App;
