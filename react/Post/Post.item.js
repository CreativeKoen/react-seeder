'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

const PostItem = ({ post }) => {
  return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="card card-block">
          <h2 className="card-title" key={post.id}>{post.title}</h2>
          <p className="card-text">{post.body}</p>
          <Link to={`/${post.id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
  )
}

export default PostItem;
