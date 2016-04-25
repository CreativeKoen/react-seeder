'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router';
import TableRow from './TableRow'

export default class Table extends Component {
  constructor() {
    super();
  }

  render () {
    return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{this.props.users.map( (row) => {
						return <TableRow row={row} key={row.id} />
					})}
				</tbody>
			</table>
    )
  }
}
