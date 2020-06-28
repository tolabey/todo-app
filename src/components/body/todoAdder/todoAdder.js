import React from 'react';
import './todoAdder.css';

export default class TodoAdder extends React.PureComponent {
  constructor(props) {
    super(props);

    console.log('contructor')

    this.state = { list: [] };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.text !== prevProps.text ) {
      this.setState({ isPageDataChanged: true })
    }
  }

  render() {

    console.log('list Renderer')

    return (
      <div className="board-column">

        <div>
          {this.props.list}
        </div>

      </div>
    )
  }
}
