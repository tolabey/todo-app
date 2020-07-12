import React, { PureComponent } from 'react';
import './navbar.css';
import axios from 'axios';

class Navbar extends PureComponent {

  render() {
    return (
      <div className="navbar">

        <button>
          {'Kart Ekle'}
        </button>
        <button>
          {'Kolon Ekle'}
        </button>

      </div>
    );
  }
}

export default Navbar;
