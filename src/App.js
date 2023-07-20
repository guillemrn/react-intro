import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearchField } from './TodoSearchField';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: "Hacer tarea", completed: false },
  { text: "Hacer de comer", completed: true },
  { text: "Curso react", completed: false },
  { text: "Crear dieta", completed: true },
  { text: "Jugar con max", completed: false },
  { text: "Jugar con maggie", completed: false }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={15} total={20} />
      <TodoSearchField />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
