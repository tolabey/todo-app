import React from 'react';
import './TodoContainer.css';

import Navbar from './navbar/navbar.js';
import Body from './body/body.js';

export const Context = React.createContext();

// store.dispatch
// store.state
// store.subscribe()

class TodoContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { name: 'default' }
  }

  render() {

    return (
        <Context.Provider value={{ name: this.state.name, setName: (value) => this.setState({ name: value })}}>
          <div>

            <Navbar/>

            <Body />

          </div>
        </Context.Provider>
    )
  }

}

export default TodoContainer;
