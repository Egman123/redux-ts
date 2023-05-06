// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchTodos = createAsyncThunk(
//     'todos/fetchTodos',
//     async function (_, { rejectWithValue }) {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

//             if (!response.ok) {
//                 throw new Error('Server Error')
//             }

//             const data = await response.json();
//             return data;
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// );



// export const deleteTodos = createAsyncThunk(
//     'todos/deleteTodos',
//     async function (id, { rejectWithValue, dispatch }) {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//                 method:'DELETE',
//             })

//             if(!response.ok) {
//                 throw new Error('i cant remove task')
//             }

//             dispatch(removeTodo({id}))

//         } catch (error) {
//            return rejectWithValue(error.message)
//         }
//     }
// )

// export const toggleStatus = createAsyncThunk(
//     'todos/toggleStatus',
//     async function (id, {rejectWithValue, dispatch, getState}) {
//         const todo = getState().todos.todos.find(todo => todo.id === id)

//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//              method: 'PATCH',
//              headers: {
//                 'Content-Type': 'application/json',
//              },
//              body: JSON.stringify({
//                 completed: !todo.completed
//              })   
//             })

//             if(!response.ok) {
//                 throw new Error('i cant toggle task')
//             }


//             dispatch(toggleRemoveTodo({id}))

//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )

// export const addNewTodo = createAsyncThunk(
//     'todos/addNewTodo',
//     async function (text, {rejectWithValue, dispatch}) {
//         try {
//             const todo = {
//                 title: text,
//                 userId: 1,
//                 completed: false
//             };

//             const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(todo)
//             });

//             if(!response.ok) {
//                 throw new Error('i cant toggle task')
//             }

//             const datas = await response.json();
//             console.log(datas);

//             dispatch(addTodo(datas))

//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )

// const initialState = {
//     todos: [],
//     status: null,
//     error: null
// }

// const setError = (state, action) => {
//     state.status = 'rejected';
//     state.error = action.payload;
// }

// const todoSlice = createSlice({
//     name: 'todos',
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             state.todos.push(action.payload)
//         },
//         removeTodo: (state, action) => {
//             state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
//         },
//         toggleRemoveTodo: (state, action) => {
//             state.todos.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo
//             })
//         }
//     },
//     extraReducers: {
//         [fetchTodos.pending]: (state) => {
//             state.status = 'loading';
//             state.error = null
//         },
//         [fetchTodos.fulfilled]: (state, action) => {
//             state.status = 'resolved';
//             state.todos = action.payload
//         },
//         [fetchTodos.rejected]: (state, action) => setError,

//         [deleteTodos.rejected]: (state, action) => setError


//     }

// })

// export default todoSlice.reducer;
// export const { addTodo, removeTodo, toggleRemoveTodo } = todoSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    status: null,
    error: null
}



export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if (!response.ok) {
                throw new Error('new Error!')
            }

            const data = await response.json();

            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteTodos = createAsyncThunk(
    'todos/deleteTodos',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('deleteTodos: Error');
            }

            dispatch(removeTodo(id))

        } catch (error) {
           return rejectWithValue(error.message)
        }




    }
)

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, { rejectWithValue, dispatch, getState }) {
        try {

            const todo = getState().todos.todos.find(todo => todo.id === id);

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })

            if (!response.ok) {
                throw new Error('toggleStatus: Error')
            }

            dispatch(toggleRemoveTodo(id))
        } catch (error) {
           return rejectWithValue(error.message)
        }

    }
)

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (title, { rejectWithValue, dispatch }) {
        try {
            const todo = {
                title: title,
                userId: 1,
                comleted: false,
            }

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
                
            })

            if(!response.ok) {
                throw new Error('addNewTodo: Error')
            }

            const datas = await response.json()
           
            dispatch(addTodo(datas))
        } catch (error) {
             return rejectWithValue(error.message)
        }


    }
)

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleRemoveTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.comleted
                }
                return todo;
            })
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchTodos.fulfilled]: (state,action) => {
            state.todos = action.payload
            state.error = null
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

export const { addTodo, removeTodo, toggleRemoveTodo } = todoSlice.actions;
export default todoSlice.reducer