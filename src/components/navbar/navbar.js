import React, { PureComponent } from 'react';
import './navbar.css';
import TodoRenderer from "../body/todoRenderer/todoRenderer";
import TodoAdder from "../body/todoAdder/todoAdder.js";

export class Navbar extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      name: '',
      numberList: [],
    };

    this.handler = () => {
    };

    this.toggleFlag = this.toggleFlag.bind(this);
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({ numberList: [1, 2, 3, 4, 5, 6]})
    }, 5000)

  }

  toggleFlag() {
    this.setState({ flag: !this.state.flag})
  }


  componentDidUpdate(prevProps, prevState) {

  }


  render() {
    return (
      <div id="navbar">
        <input type="text"/>

        <button onClick={(event) => this.toggleFlag(event)}>{'BURAYA TIK'}</button>

      </div>
    );
  }
}

// mounting

// -> // updating

// unmounting


export default Navbar;
