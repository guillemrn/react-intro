import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearchField } from '../Components/TodoSearchField';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import Lottie from "lottie-react";
import ChecklistAnimation from '../icons/ChecklistAnimation.json'

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  createdDate
}) {
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
          <p className='text-slate-700 text-xl mb-2 dark:text-white'>Agrega tu primera tarea para comenzar</p>
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

export { AppUI }
