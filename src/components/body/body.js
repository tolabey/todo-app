import React from 'react';
import './body.css';

import TodoAdder from './todoAdder/todoAdder.js';
import TodoRenderer from './todoRenderer/todoRenderer.js';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], inputText: '' }
  }

  render() {

    return (
      <div className="body">

        <TodoAdder />

      </div>
    )
  }
}
