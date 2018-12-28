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
      <form>
        <input type="text" value={name} onChange={this.onNameChange} name="name"/>
        <input type="password" value={password} onChange={this.onPasswordChange} name="password"/>
        <Button waves='light' large className='red' onClick={this.submitForm.bind(this, true)}>
          Sign Up
        </Button>
        <Button type="button" onClick={this.submitForm.bind(this, false)}>
          Sign In
        </Button>
        <Message type={messageType} message={messageText}/>
      </form>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setUser: (user) => dispatch(setUser(user))
  };
}

export default connect(null, mapDispatchToProps)(AuthForm);
