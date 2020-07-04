import React from 'react';
import './todoRenderer.css';
import TodoCard from './card/todoCard'


// props: list
export default class TodoRenderer extends React.PureComponent {

  render() {

    return (
      <div className="todo-renderer">
        {
          this.props.todoList.map((each) => {
            return (
              <TodoCard
                key={each.get('id', Math.random())}
                id={each.get('id', '-')}
                text={each.get('text', '')}
              />
            )
          })
        }
      </div>
    )
  }
}
