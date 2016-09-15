'use strict';
import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
			count: 0
		}
  }

  render () {
    return (
      <div className="container">
				<h1>Counter</h1><p>Click the Plus button to increment the counter</p>
      </div>
    )
  }
}
