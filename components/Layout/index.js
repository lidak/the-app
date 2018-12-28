import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';

export default class Layout extends Component {
  render () {
    const {
      children
    } = this.props;

    return (
      <div className="layout">
        <Header />
        {children}
        <footer></footer>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
