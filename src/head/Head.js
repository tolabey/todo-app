import React from 'react';
import './Head.css';
import { withRouter } from "react-router-dom";

class Head extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = { isNight: false };
  }

  render() {
    const { isNight } = this.state;
    const { history } = this.props;

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
            onClick={() => history && history.push('/todo')}
          >
            {'TODO'}
          </button>

          <button
            onClick={() => history && history.push('/users')}
          >
            {'Users'}
          </button>

        </div>
      </div>
    )
  }
}

export default withRouter(Head);