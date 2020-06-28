import React from 'react';
import './body.css';

import TodoAdder from "./todoAdder/todoAdder";
import I from 'immutable';

export default class Body extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { todos: I.List(), exampleObj: I.Map({ name: 'mustafa'}) }
  }

  render() {

// basic, this.state.exampleObj.get('a') => exampleobj.a
    // set get

    const firstArray = I.List();
    const secondObj = firstArray;

    const a = {
      b: {
        c: {
          d: {
            e: {
              g: {
                f: 3
              }
            }
          }
        }
      }
    };




    I.Map({ a: undefined }).get('a', '')
    I.Map({ a: undefined }).set('a', 'a değeri'); // {a: 'a degeri'}

    I.Map({ a: { b: { c: { d: 'd nin değeri'}}}}).getIn(['a', 'b', 'c', 'd', 'e'], 'e yok') // dnin değer

    I.Map().setIn(['a', 'b', 'c'], ' c n inn');

    // get set
    // getIn setIn
    // .toJS, I.fromJS()

    return (
      <div className="body">
        <BoardColumn />

        <Card />
      </div>
    )
  }
}
