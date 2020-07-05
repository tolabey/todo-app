import React from 'react';
import './todoAdder.css';
import { connect } from "react-redux";

class TodoAdder extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = { todoText: '' };

    this.handleTodoText = this.handleTodoText.bind(this);
  }

  handleTodoText(value) {
    this.setState({ todoText: value })
  }

  render() {
    const { todoText } = this.state;

    return (
      <div className="board-column">

        <input type="text" onChange={(e) => this.handleTodoText(e.target.value)}/>

        <button onClick={
          () => this.props.addTodo({ id: Math.random(), text: todoText})
        }
        >
          {'EKLE'}
        </button>

      </div>
    )
  }
}

function mapStateToProps() {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch({type: 'ADD_TODO', data: todo }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdder);
