import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthForm from '../../../AuthForm';
import { connect } from 'react-redux';

class Header extends Component {
  render () {
    const { user } = this.props;

    return (
      <header>
        {
          !user.name &&
          <AuthForm/>
        }
        {
          !!user.name && `Welcome ${user.name}!`
        }
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.obj
};

function mapStateToProps ({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Header);
