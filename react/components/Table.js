'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router';
import TableRow from './TableRow'

export default class Table extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  // }
	//
  // componentDidUnmount() {
  //   // this.setState({ dataRows: randomSkills });
  // }

  render () {
    return (
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{this.props.rows.map( (row, index) => {
						return <TableRow row={row} key={index}/>
					})}
				</tbody>
			</table>
    )
  }
}
