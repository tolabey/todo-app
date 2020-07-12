import React, { PureComponent } from 'react';
import './navbar.css';
import axios from 'axios';
import {Link, withRouter} from "react-router-dom";

class Navbar extends PureComponent {

  render() {
    const { history } = this.props;

    return (
      <div className="navbar">

        <button>
          {'Kart Ekle'}
        </button>
        <button>
          {'Kolon Ekle'}
        </button>
        <button
          onClick={() => history && history.push('/users')}
        >
          {'Usersa Gider'}
        </button>

      </div>
    );
  }
}

export default withRouter(Navbar);
