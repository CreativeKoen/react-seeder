'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// @connect( (store) => {
//   return {
//     posts: store.BlogReducer.posts,
//     status: store.BlogReducer.status
//   }
// })
export default class AdminBlogContainer extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   this.props.dispatch(getAll());
  // }

  render () {
    // let { status, posts } = this.props;
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
