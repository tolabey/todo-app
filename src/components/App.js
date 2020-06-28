import React from 'react';
import './App.css';

import Navbar from './navbar/navbar.js';
import Body from './body/body.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'mustafa' }
  }



  render() {


    return (
      <div>

        <Navbar/>

        <Body />
      </div>
    )
  }

}

export default App;
