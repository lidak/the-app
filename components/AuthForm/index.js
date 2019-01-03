import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'class-names';

import { setUser } from '../../actions/actionCreators';
import Message from '../Message';
import { Col, Row, Button, Input } from 'react-materialize';

import './style.styl';

class AuthForm extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      password: '',
      messageType: '',
      messageText: '',
      userId: null
    };
  }

  setTextInputRef = element => {
    this.textInput = element;
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  submitForm = (isRegister) => {
    const {
      name,
      password
    } = this.state;
    const urlEnding = isRegister ? 'sign-up' : 'sign-in';
    const successMessage = isRegister ? 'User created' : 'User Logged In';
    const { setUser } = this.props;

    (async () => {
      const rawResponse = await fetch(`${window.location.origin}/users/${urlEnding}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          password
        })
      });
      const content = await rawResponse.json();

      if (content.error) {
        this.setState({
          messageType: 'error',
          messageText: content.error
        });
      } else {
        this.setState({
          messageType: 'info',
          messageText: successMessage
        });

        setUser({ name, password });
      }
    })();
  }

  isNameValid () {
    const { name } = this.state;
    return name.length && name.match(/^.{2,}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  }

  isPasswordValid () {
    const { password } = this.state;

    return password.match(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/);
  }

  isFormValid () {
    return this.isNameValid() && this.isPasswordValid();
  }

  render () {
    const {
      name,
      password,
      messageType,
      messageText
    } = this.state;

    return (
      <>
        <Row>
          <Input
            type="email"
            value={name}
            onChange={this.onNameChange}
            className={cn(this.isNameValid() ? 'valid' : 'invalid', 'form-input')}
            label="email"
            s={12}
            m={6}
          />
          <Input
            type="password"
            value={password}
            onChange={this.onPasswordChange}
            label="password"
            className={this.isPasswordValid() ? 'valid' : 'invalid'}
            s={12}
            m={6}
          />
        </Row>
        <Row>
          <Col s={12} offset="m6" m={3}>
            <Button
              waves="light"
              onClick={this.submitForm.bind(this, true)}
              className="button"
              disabled={!this.isFormValid()}
            >
              Register
            </Button>
          </Col>
          <Col s={12} m={3}>
            <Button
              onClick={this.submitForm.bind(this, false)}
              disabled={!this.isFormValid()}
              className="button"
            >
              Log In
            </Button>
          </Col>
          <Message type={messageType} message={messageText}/>
        </Row>
      </>
    );
  }
}

AuthForm.propTypes = {
  setUser: PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    setUser: (user) => dispatch(setUser(user))
  };
}

export default connect(null, mapDispatchToProps)(AuthForm);
