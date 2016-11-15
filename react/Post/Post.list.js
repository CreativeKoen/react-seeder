
'use strict';
import React, { Component } from 'react';
import PostItem from './Post.item';

const PostList = ({ posts }) => {
  return (
    <section>
      {
        posts.map( (post) => {
          return <PostItem key={post.id} post={post}/>
        })
      }
    </section>
  )
}

export default PostList;
