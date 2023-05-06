import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from './store/todoSlice'

const AddTodo = ({ text, setText }) => {
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addNewTodo(text));
        setText('')
    }

    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTask}>add todo</button>            
        </div>
    )
}

export default AddTodo