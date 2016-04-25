'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Table from '../components/Table';

export default class Home extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="container">
	      <div className="row">
					<h1 className="text-center">React Seeder by CreativeKoen</h1>
	      </div>
      </div>
    )
  }
}
