import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Posts from './Posts';


import { useEffect } from 'react';
import { fetchTodos } from './store/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [text, setText] = useState('');
  const {status, error} = useSelector(state => state.todos) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  
  return (
    <div className='App'>
       <AddTodo text={text} setText={setText}/>
       <TodoList />
       <Posts />

       {status === 'loading' && <h2>...Loading</h2>}
       {error && <h2>An Error occerd: {error}</h2>}
       
    </div>
   
  )
}

export default App