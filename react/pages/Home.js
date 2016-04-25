'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Table from '../components/Table';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
				{firstname: 'user1', lastname: 'do1', email: 'user1@gmail.com'}
				,{firstname: 'user2', lastname: 'do2', email: 'user2@gmail.com'}
				,{firstname: 'user3', lastname: 'do4', email: 'user3@gmail.com'}
			]
    }
  }

  render () {
    return (
      <div className="container">
	      <div className="row">
					<Table rows={this.state.data}/>
	      </div>
      </div>
    )
  }
}
