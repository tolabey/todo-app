import React from 'react';
import I from "immutable";
import {connect} from "react-redux";

class UserCard extends React.PureComponent {

  componentDidMount() {

  }

  render() {
    console.log('this.props UserCard', this.props);
    const { match: { params: {index}}, users } = this.props;

    console.log('index Card', users.toJS())

    return (
      <div>

        {
          users.getIn([index, 'name', 'first'], 'mustafa')
        }

      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    users: store.get('users', I.List()),
  }
}


export default connect(mapStateToProps)(UserCard);