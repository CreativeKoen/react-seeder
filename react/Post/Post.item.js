'use strict';
import React, { Component } from 'react';

const PostItem = ({ post }) => {
  return (
    <article>
      <h2 key={post.id}>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  )
}

export default PostItem;
