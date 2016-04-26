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

  render () {
    const { users } = this.state;
    return (
      <div className="container">
				<Nav />
	      <div className="row">
          <h1 className="text-center">User info table</h1>
          <button onClick={this._createUser.bind(this)}>Create</button>
					<Table users={users}/>
	      </div>
      </div>
    )
  }
}
