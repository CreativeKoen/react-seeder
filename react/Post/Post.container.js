// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { show } from './Post.actions';

@connect( (store) => {
  return {
    post: store.PostReducer.post,
    status: store.PostReducer.status
  }
})
class PostContainer extends Component<void, PostProps, void> {
  constructor() {
    super();
  }

  componentDidMount() {
    let { postID } = this.props.routeParams;
    this.props.dispatch(show(postID));
  }

  render (): ?React$Element<any> {
    let { status, post } = this.props;
    return (
      <div className="container">
        <div className="page-header">
          <h1>React Blog</h1>
          <small className="text-muted">status:&nbsp;{status}</small>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Link to="/" className="btn btn-primary"><i class="fa fa-arrow-left"></i> &nbsp;Go Back</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostContainer;
