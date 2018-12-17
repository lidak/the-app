import React, { Component } from 'react';

import Message from './Message';

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      messageType: '',
      messageText: '',
      userId: null
    }
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  submitForm = (isRegister) => {
    const {
      name,
      password
    } = this.state;
    const urlEnding = isRegister ? 'sign-up' : 'sign-in';
    const successMessage = isRegister ? 'User created' : 'User Logged In';

    (async () => {
      const rawResponse = await fetch(`${location.origin}/users/${urlEnding}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, password})
      });
      const content = await rawResponse.json();

      if(content.error) {
        this.setState({
          messageType: 'error',
          messageText: content.error
        })
      } else {
        this.setState({
          messageType: 'info',
          messageText: successMessage
        })
      }
    })();
  }

  render() {
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
        <input type="button" value="Sign Up" onClick={this.submitForm.bind(this, true)}/>
        <input type="button" value="Sign In" onClick={this.submitForm.bind(this, false)}/>
        <Message type={messageType} message={messageText}/>
      </form>
    )
  }
}