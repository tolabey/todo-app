import React from 'react';
import './todoRenderer.css';


// props: list
export default class TodoRenderer extends React.PureComponent {

  render() {
    return (
      <div className="todo-renderer">
        {
          this.props.todoList.map((each, index) => {
            return (
              <div key={index} className="one-todo">{each}</div>
            )
          })
        }
      </div>
    )
  }
}
