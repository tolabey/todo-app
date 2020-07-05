import React from 'react';
import './todoRenderer.css';
import TodoCard from './card/todoCard';
import I from "immutable";
import { connect } from 'react-redux';

// props: list
class TodoRenderer extends React.PureComponent {

  render() {

    return (
      <div className="todo-renderer">
        {
          this.props.todoList.map((each, index) => {
            return (
              <TodoCard
                key={each.get('id', Math.random())}
                id={each.get('id', '-')}
                text={each.get('text', '')}
                index={index}
              />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps( store ) {

  return {
    todoList: store.get('todoList', I.List()),
  }
}

export default connect(mapStateToProps, {})(TodoRenderer)
