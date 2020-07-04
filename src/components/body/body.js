import React from 'react';
import './body.css';

import TodoAdder from "./todoAdder/todoAdder";
import TodoRenderer from "./todoRenderer/todoRenderer";

import I from 'immutable';

export default class Body extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = { todoList: I.List() }

    this.updateList = this.updateList.bind(this);
  }

  updateList(todo) {
    this.setState({ todoList: this.state.todoList.unshift(todo) });
  }

  render() {
    const { todoList } = this.state;

    return (
      <div className="body">

        <div>Size: {this.state.todoList.size}</div>

        <TodoAdder
          updateList={this.updateList}
        />

        <TodoRenderer
          todoList={todoList}
        />

      </div>
    )
  }
}
