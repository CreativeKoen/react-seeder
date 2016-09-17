'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { completeTodo, getTodos } from '../Actions/Actions';

@connect((store) => {
  return {
    todos: store.TodoReducer.todos
  }
})
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.toggleComplete = this._toggleComplete.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTodos());
  }

  _toggleComplete(todo) {
    const { dispatch } = this.props;
    console.log(todo);
    //dispatch(completeTodo(todo.ID));
    //onClick={this.toggleComplete(todo)}
  }

  render () {
    let { todos } =  this.props;
    let classes;
    let maptodos = todos.map( (todo) => {
      if ( todo.completed ) {
        classes = "btn-success"
      } else {
        classes = "btn-warning"
      }
      return <li
        className={classes}
        key={todo.ID}>{todo.text}</li>;
    });
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">Todos</h1>
          <hr />
          <div className="col-md-8 col-md-offset-2">
            <ul>
              {maptodos}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

