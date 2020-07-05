import React, { PureComponent } from 'react';
import {withConsumer} from "../../../../context/consumer";

class Test extends PureComponent {

  render() {

    console.log('TEST RENDERED', this.props)

    return (
      <div className="test">

        <button
          onClick={() => this.props.context.setName('mmm')}
        >
          {this.props.context.name || 'name'}
        </button>

      </div>
    );
  }
}

export default Test
