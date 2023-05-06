// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     posts: [],
// }

// export const getPosts = createAsyncThunk(
//     'posts/getPosts',
//     async function(_, {rejectWithValue, dispatch}) {
//        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
//        dispatch(addPosts(res.data)) 
//     }
// )

// export const deletePostsById = createAsyncThunk(
//     'posts/deletePostsById',
//     async function(id, {rejectWithValue, dispatch}) {
//        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//        dispatch(removePosts(id))
//     }   
// )

// const PostsSlice = createSlice({
//     name: 'PostsSlice',
//     initialState,
//     reducers: {
//         addPosts(state, action) {
//            state.posts = action.payload;
//         },
//         removePosts(state, action) {
//             state.posts = state.posts.filter(post => post.id !== action.payload)
//         }
//     }
// })

// export const {addPosts, removePosts} = PostsSlice.actions;
// export default PostsSlice.reducer;

const initialState = {
    posts: []
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async function (_, {rejectWithValue, dispatch}) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(addPosts(res.data))
  } 
)

export const deletePostsById = createAsyncThunk(
    'posts/deletePostsById',
    async function(id, {rejectWithValue, dispatch}){
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch(removePosts(id))
    }
)

const PostsSlice = createSlice({
    name: 'PostsSlice',
    initialState,
    reducers: {
      addPosts:(state, action) => {
        state.posts = action.payload
      },
      removePosts:(state, action) => {
       state.posts = state.posts.filter(post => post.id !== action.payload)
      }
    }
})

export const {addPosts, removePosts} = PostsSlice.actions;
export default PostsSlice.reducer; 