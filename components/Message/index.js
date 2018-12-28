import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.styl';

export default class Message extends Component {
  constructor () {
    super();
    this.state = {
      lastShown: new Date()
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.message !== this.props.message ||
        prevProps.type !== this.props.type
    ) {
      this.setState({
        lastShown: new Date()
      });
    }
  }

  render () {
    const {
      type = 'info',
      message,
      hideAfter = 5000
    } = this.props;
    const {
      lastShown
    } = this.state;

    const isVisible = new Date() - lastShown < hideAfter;

    return (
      !!message.length &&
      isVisible &&
      <div className={`message ${type}`}>
        {message}
      </div>
    );
  }
}

Message.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
  hideAfter: PropTypes.number
}
