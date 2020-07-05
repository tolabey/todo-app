import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import I from 'immutable';
import Test from './Test.js';
import {Context } from '../../../App.js'


export class TodoCard extends PureComponent {

  constructor(props) {
    super(props);

    this.state = { clickStatus: false, testData: I.Map() };
    this.toggleClickStatus = this.toggleClickStatus.bind(this);
  }

  toggleClickStatus() {
    this.setState({ clickStatus: !this.state.clickStatus })
  }

  render() {
    const { id, text } = this.props;
    const { clickStatus } = this.state;

    return (
      <div className="todo-card">
        <Context.Consumer>
          {(context) => (
            <Test
              context={context}
              testData={this.state.testData}
            />
          )}
        </Context.Consumer>
        <button
          onClick={() => {
            const { testData } = this.state;

            this.setState({ testData: testData.set('name', 'mustafa') })
          }}
        >
          TIK
        </button>
        <div className="one-todo">

          {
            !clickStatus
              ? (
                <div onClick={this.toggleClickStatus}>
                  text: {text}
                </div>
              )
              : (
                <button
                  onClick={this.toggleClickStatus}
                >
                  {'Texti göster'}
                </button>
              )
          }

          <div>
            id: {id}
          </div>
        </div>
        <button
          className="todo-delete-btn"
          onClick={() => this.props.deleteTodo(this.props.index)}

        >
          {'Delete'}
        </button>

      </div>
    );
  }
}

function mapStateToProps() {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (index) => dispatch({ type: 'DELETE_TODO', data: index })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCard);
