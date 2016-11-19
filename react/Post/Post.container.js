'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { show } from './Post.actions';

@connect( (store) => {
  return {
    post: store.PostReducer.post,
    status: store.PostReducer.status
  }
})
export default class PostContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props);
    let { postID } = this.props.routeParams;
    this.props.dispatch(show(postID));
  }

  render () {
    let { status, post } = this.props;
    return (
      <div className="container">
        <div className="page-header">
          <h1>React Blog</h1>
          <small className="text-muted">{status}</small>
        </div>
        <div className="row">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    )
  }
}
