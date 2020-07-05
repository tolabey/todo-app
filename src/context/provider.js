import React from 'react';
import I from 'immutable';


export const Context = React.createContext();

function Provider(props) {
  const [state, setState] = React.useState(I.Map());

  const { children } = props;
  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  );
}


export default Provider;
