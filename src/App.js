import React from 'react';
import TodoContainer from "./todo/TodoContainer";
import Users from './users/Users';
import Head from "./head/Head";
import Welcome from "./welcome/Welcome";
import NotFound from "./notFound/NotFound";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import UserCard from "./users/UserCard";


class App extends React.PureComponent {

  render() {

    return (
      <>
        <BrowserRouter>
          <Head />
          <Switch>
            <Route exact path={"/"} component={Welcome}/>
            <Route path={"/todo"} component={TodoContainer}/>
            <Route exact path={"/users"} component={Users}/>
            <Route exact path={"/users/:index"} component={UserCard}/>
            <Route path={"/notfound"} component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </>
   )
  }
}

export default App;