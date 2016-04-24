'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class TableRow extends Component {
  constructor() {
    super();
  }

  render () {
    return (
			<tr>
				<td>{this.props.row.firstname}</td>
				<td>{this.props.row.lastname}</td>
				<td>{this.props.row.email}</td>
			</tr>
    )
  }
}
