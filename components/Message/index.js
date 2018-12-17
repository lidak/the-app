import React, { Component } from 'react';

import './style.styl'

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      lastShown: new Date()
    }
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.message != this.props.message ||
      nextProps.type != this.props.type
    ) {
      this.state.lastShown = new Date();
    }
  }

  render() {
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