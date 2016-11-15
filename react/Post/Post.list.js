
'use strict';
import React, { Component } from 'react';
import PostItem from './Post.item';

const PostList = ({ posts }) => {
  return (
    <span>
      {
        posts.map( (post) => {
          return <PostItem key={post.id} post={post}/>
        })
      }
    </span>
  )
}

export default PostList;
