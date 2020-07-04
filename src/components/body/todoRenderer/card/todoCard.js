import React, { PureComponent } from 'react';

export class TodoCard extends PureComponent {

  constructor(props) {
    super(props);

    this.state = { clickStatus: false };
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

      </div>
    );
  }
}

export default TodoCard;
