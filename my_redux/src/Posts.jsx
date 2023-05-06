import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, removePosts } from './store/PostsSlice';

const Posts = () => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts)  
  console.log(posts)
  return (
    <div>
        <button onClick={()=>dispatch(getPosts())}>Get Posts</button>
        <ul >
            {posts.map(post => 
                 <li onClick={() => dispatch(removePosts(post.id))}> {post.title}</li>
            )}
        </ul>
    </div>
  )
}

export default Posts