import React from 'react';
import TodoContainer from "./todo/TodoContainer";
import Users from './users/Users';
import Head from "./head/Head";
import { connect } from "react-redux";

class App extends React.PureComponent {

  render() {
    const { isTodoPage } = this.props;

    return (
      <>
        <Head />
        <div>
          {
            isTodoPage
              ? <TodoContainer />
              : <Users />
          }
        </div>
      </>
   )
  }
}

function mapStateToProps(store) {
  return {
    isTodoPage: store.get('isTodoPage', true),
  }
}

export default connect(mapStateToProps)(App);