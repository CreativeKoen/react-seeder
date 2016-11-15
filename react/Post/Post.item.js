'use strict';
import React, { Component } from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="col-xs-12 col-sm-3">
      <div className="card card-block">
        <h2 className="card-title" key={post.id}>{post.title}</h2>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  )
}

export default PostItem;
