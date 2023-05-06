import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


const TodoList = ({/*todosremoveTodo,toggletodoComplete*/}) => {

  const todos = useSelector(state => state.todos.todos)
  console.log('todos' + todos)
  return (
    
     <ul>
        {todos.map(todo => 
         <TodoItem 
           key={todo.id}
           {...todo}
           /*
           removeTodo={removeTodo}
           toggletodoComplete={toggletodoComplete}*/
           />)}
     </ul>
  )
}

export default TodoList