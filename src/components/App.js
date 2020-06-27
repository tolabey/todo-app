import React from 'react';
import './App.css';

import Navbar from './navbar/navbar.js';
import Body from './body/body.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log('CONSTRUCTOR')

    this.state = { name: 'mustafa' }
  }



  render() {

    console.log('APP')


    return (
      <div>

        <button
          onClick={() => this.setState({ name: this.state.name + 's'})}
        >
          My button
        </button>

        <div>{ this.state.name} </div>


        <Navbar
          name={this.state.name}
        />

        <Body />
      </div>
    )
  }

}

export default App;
