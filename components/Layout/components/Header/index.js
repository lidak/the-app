import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthForm from '../../../AuthForm';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import { logOut } from '../../../../actions/actionCreators';

class Header extends Component {
  static propTypes = {
    user: PropTypes.object,
    logOut: PropTypes.func.isRequired
  };

  render () {
    const { user, logOut } = this.props;

    return (
      <header>
        {
          !user.name &&
          <AuthForm/>
        }
        {
          !!user.name &&
          <>
            {`Welcome ${user.name}!`}
            <Button onClick={logOut} className="offset-m1">Log Out</Button>
          </>
        }
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

function mapDispatchToProps (dispatch) {
  return {
    logOut: () => {
      dispatch(logOut());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
