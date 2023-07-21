import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearchField } from './TodoSearchField';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

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

  console.log("Los usuarios buscan todos de " + searchValue);
  
  return (
    <div className='font-sans antialiased p-6'>
      <div>
        <TodoCounter
          completed={completedTodos}
          total={totalTodos}
        />
        <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center'>
          <TodoSearchField
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <CreateTodoButton />
        </div>
      </div>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>


    </div>
  );
}

export default App;
