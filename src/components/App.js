import React from 'react';
import './App.css';

import Navbar from './navbar/navbar.js';
import Body from './body/body.js';

class App extends React.Component {

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
