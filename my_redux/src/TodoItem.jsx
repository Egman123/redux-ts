import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodos,toggleStatus } from './store/todoSlice';
import { toggleRemoveTodo } from './store/todoSlice';

const TodoItem = ({id, title, completed}) => {
  
  const dispatch = useDispatch();
 
  return (
    <div>
        <ul>
          <li>
            <input type="checkbox" 
                   checked={completed} 
                   onChange={() => dispatch(toggleStatus(id))}/>
           <span>{title}</span>
           <span onClick={() => dispatch(deleteTodos(id))}>&times;</span>           
          </li>    
        </ul>
    </div>
  )
}

export default TodoItem