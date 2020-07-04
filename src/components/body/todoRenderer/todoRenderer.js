import React from 'react';
import './todoRenderer.css';


// props: list
export default class TodoRenderer extends React.PureComponent {

  render() {
    return (
      <div className="todo-renderer">
        {
          this.props.todoList.map((each) => {
            return (
              <div key={each.get('id', Math.random())} className="one-todo">
                <div>
                  text: {each.get('text', '-')}
                </div>
                <div>
                  id: {each.get('id', '-')}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
