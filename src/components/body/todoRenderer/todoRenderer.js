import React from 'react';
import './todoRenderer.css';

export default class TodoRenderer extends React.Component {
  constructor(props) {
    super(props);

    console.log('TodoRenderer')
  }
  render() {
    return (
      <div className="todo-renderer">
        {'todo renderer'}
      </div>
    )
  }
}
