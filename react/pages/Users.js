'use strict';
import React, { Component } from 'react';
import Table from '../components/Table';
import UserStore from '../stores/UserStore';
import * as UserActions from '../actions/UserActions';
import Nav from '../components/commen/Nav';

export default class Users extends Component {
  constructor() {
    super();
    this.getUsers = this._getUsers.bind(this);
    this.state = {
      users: UserStore.getAll()
    };
  }

  _getUsers() {
    this.setState({
      users: UserStore.getAll()
    });
  }

  _createUser() {
    UserActions.createUser({ firstname: 'john', lastname: 'do', email: 'john@gmail.com'});
  }

  componentWillMount() {
    UserStore.on('change', this.getUsers);
  }

  componentWillUnmount() {
    UserStore.removeListener('change', this.getUsers);
  }

  //<h1 className="text-center">User info table</h1>
  render () {
    const { users } = this.state;
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col-md-6">
            <h2>Create a new user</h2>
            <form className="from" onSubmit={this._createUser.bind(this)} noValidate>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="firstname" data-name="firstname"/>
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="lastname" data-name="lastname"/>
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="email" data-name="email"/>
              </div>
              <div className="form-group">
                <input className="btn" type="submit" value="add" />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <Table users={users}/>
          </div>
        </div>
      </div>
    )
  }
}
