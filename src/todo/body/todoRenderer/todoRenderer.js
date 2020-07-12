import React from 'react';
import './todoRenderer.css';
import TodoCard from './card/todoCard';
import I from "immutable";
import { connect } from 'react-redux';

// props: list
class TodoRenderer extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = { getRand: Math.random() };
  }

  render() {

    return (
      <div className="todo-renderer">
        <button
          onClick={() => this.setState({ getRand: Math.random() })}
        >
          Reset card
        </button>

        {
          this.props.todoList.map((each, index) => {
            return (
              <TodoCard
                key={each.get('id', Math.random())}
                id={each.get('id', '-')}
                text={each.get('text', '')}
                index={index}
                reset={this.state.getRand}
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
