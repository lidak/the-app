import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUser } from '../../actions/actionCreators';
import Message from '../Message';
import { Button } from 'react-materialize';

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
    debugger
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

  render () {
    const {
      name,
      password,
      messageType,
      messageText
    } = this.state;

    return (
      <div className="row">
        <div className="input-field col s12 m6">
          <input
            type="text"
            value={name}
            onChange={this.onNameChange}
            id="name"
            className="validate"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s12 m6">
          <input
            type="password"
            value={password}
            onChange={this.onPasswordChange}
            id="password"
            className="validate"
          />
          <label htmlFor="password">
            Password
          </label>
        </div>
        <Button
          waves="light"
          className="col s12 m2 offset-m7"
          onClick={this.submitForm.bind(this, true)}
        >
          Register
        </Button>
        <Button
          className="col s12 m2 offset-m1"
          onClick={this.submitForm.bind(this, false)}
        >
          Log In
        </Button>
        <Message type={messageType} message={messageText}/>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setUser: (user) => dispatch(setUser(user))
  };
}

export default connect(null, mapDispatchToProps)(AuthForm);
