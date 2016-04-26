'use strict';
import React, { Component } from 'react';
import Table from '../components/Table';
import Nav from '../components/commen/Nav';

export default class Home extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="container">
				<Nav />
	      <div className="row">
					<h1 className="text-center">React Seeder by CreativeKoen</h1>
	      </div>
      </div>
    )
  }
}
