import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';
import postReducer from './PostsSlice'

export default configureStore({
    reducer: {
        todos:todoReducer,
        posts: postReducer
    }
})