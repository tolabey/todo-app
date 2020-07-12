import React from 'react';
import './body.css';

import TodoAdder from "./todoAdder/todoAdder";
import TodoRenderer from "./todoRenderer/todoRenderer";

import I from 'immutable';

export default class Body extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = { todoList: I.List(), isRendererHidden: false };

    this.toggleHideTodoRenderer = this.toggleHideTodoRenderer.bind(this);
  }

  toggleHideTodoRenderer() {
    this.setState({ isRendererHidden: !this.state.isRendererHidden })
  }

  render() {
    const { todoList, isRendererHidden } = this.state;

    return (
      <div className="body">

        <button onClick={ this.toggleHideTodoRenderer }>{isRendererHidden ? 'Göster' : 'Gizle'}</button>

        <TodoAdder />

        {
          !isRendererHidden
            ? (
              <TodoRenderer />
            )
            : (
              <div>{'Todo Listesi Gizlendi'}</div>
            )
        }

      </div>
    )
  }
}
