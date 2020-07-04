import React from 'react';
import './body.css';

import TodoAdder from "./todoAdder/todoAdder";
import TodoRenderer from "./todoRenderer/todoRenderer";

import I from 'immutable';

export default class Body extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = { todoList: I.List() }
  }

  updateList(todo) {
    this.setState({ todoList: this.state.todoList.push(todo) });
  }

  render() {

    return (
      <div className="body">

        <TodoAdder

        />

        <TodoRenderer

        />

      </div>
    )
  }
}
