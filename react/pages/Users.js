'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Table from '../components/Table';
import UserStore from '../stores/UserStore';
import * as UserActions from '../actions/UserActions';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: UserStore.getAll()
    };
  }

  componentWillMount() {
    UserStore.on('change', () => {
      this.setState({
        users: UserStore.getAll()
      });
    });
  }

  createUser() {
    UserActions.createUser({ firstname: 'john', lastname: 'do', email: 'john@gmail.com'});
  }

  render () {
    const { users } = this.state;
    return (
      <div className="container">
	      <div className="row">
          <h1 className="text-center">User info table</h1>
          <button onClick={this.createUser.bind(this)}>Create</button>
					<Table users={users}/>
	      </div>
      </div>
    )
  }
}
