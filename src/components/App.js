import React from 'react';
import './App.css';

import Navbar from './navbar/navbar.js';
import Body from './body/body.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from '../redux/reducer/reducer.js';
import ProviderContext from '../context/provider.js'
//

const store = createStore(reducer);
export const Context = React.createContext();


// store.dispatch
// store.state
// store.subscribe()

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { name: 'default' }
  }

  render() {

    return (
      <Provider store={store}>
        <Context.Provider value={{ name: this.state.name, setName: (value) => this.setState({ name: value })}}>
          <div>

            <Navbar/>

            <Body />

          </div>
        </Context.Provider>
      </Provider>
    )
  }

}

export default App;
