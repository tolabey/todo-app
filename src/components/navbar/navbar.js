import React, { Component } from 'react';
import './navbar.css';
import TodoRenderer from "../body/todoRenderer/todoRenderer";
import TodoAdder from "../body/todoAdder/todoAdder.js";

export class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {flag: false};
  }

  render() {
    return (
      <div
        className="navbar"
      >
        <button
          onClick={() => this.setState({ flag: !this.state.flag})}
        >
          {'BURAYA TIK'}
        </button>
        {
          this.state.flag
          ? (<TodoRenderer className="logo">{'Logo'}</TodoRenderer>)
          : (
            <TodoAdder className="logout-wrapper">
              <div className="logout">{'Logout'}</div>
            </TodoAdder>
          )
        }
      </div>
    );
  }
}


export default Navbar;
