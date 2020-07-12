import React from 'react';
import './Head.css';
import { connect } from "react-redux";

class Head extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = { isNight: false };
  }

  render() {
    const { isNight } = this.state;
    const { isTodoPage, toggleIsTodoPage } = this.props;

    return (
      <div className={`app-head${isNight ? ' app-head--night' : ''}`}>
        <div className="app-head__left app-head--light">
          <div className="app-head__left__home">LOGO</div>
          <div>Home</div>
        </div>
        <div className="head__right">
          <button
            onClick={() => this.setState({ isNight: !isNight })}
          >
            {isNight ? 'Night' : 'Day'}
          </button>
          <button
            onClick={() => toggleIsTodoPage()}
          >
            {isTodoPage ? 'Todo' : 'Users'}
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    isTodoPage: store.get('isTodoPage', true),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleIsTodoPage: () => dispatch({ type: 'TOGGLE_IS_TODO_PAGE'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);