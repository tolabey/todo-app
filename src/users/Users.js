import React from 'react';
import axios from 'axios';
import I from 'immutable';
import { connect } from 'react-redux';

class Users extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { users: I.Map()};
  }


  componentDidMount() {
    const { users, setUsers } = this.props;

    users.size === 0 && axios({
      url: 'https://api.randomuser.me/?nat=us,gb&results=20'
    })
      .then((result) =>  setUsers(I.fromJS(result.data.results)))
      .catch((err) =>  console.log(err));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    const { users } = this.props;

    return (
      <div>
        {
          users.map((each) => {
            return (
              <div
                key={each.getIn(['id', 'value'])}
              >
                {each.getIn(['name', 'first'])}
              </div>
            )
          })
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

function mapDispatchToProps(dispatch) {
  return {
    setUsers: (users) => dispatch({ type: 'SET_USERS', data: users})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);