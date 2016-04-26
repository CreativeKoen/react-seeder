'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Nav extends Component {
  constructor() {
    super();
  }

  render () {
    return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">React Seeder</a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li><Link to="/">Home</Link></li>
			      <li><Link to="users">Users</Link></li>
			    </ul>
			  </div>
			</nav>
    )
  }
}
