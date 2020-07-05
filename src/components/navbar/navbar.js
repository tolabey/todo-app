import React, { PureComponent } from 'react';
import './navbar.css';

class Navbar extends PureComponent {

  render() {

    return (
      <div className="navbar">

        <button>Kart Ekle</button>
        <button>kolon Ekle</button>

        <div>{ this.props.counter }</div>

      </div>
    );
  }
}

// burdan kullancam
export default Navbar;
