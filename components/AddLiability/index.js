import React, { Component } from 'react';

export default class Index extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      amount: 0
    };
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  changeAmount = (e) => {
    this.setState({
      amount: e.target.value
    });
  }

  addClicked = () => {
    const { save } = this.props;
    const {
      title,
      amount
    } = this.state;

    save({
      title,
      amount
    });
  }

  render () {
    const {
      title,
      amount
    } = this.state;

    return (
      <div className="add-liability">
        <button onClick={this.addClicked}>Add</button>
        <input
          type="text"
          onChange={this.changeTitle}
          value={title}
        />
        <input
          type="number"
          value={amount}
          onChange={this.changeAmount}
        />
      </div>
    );
  }
}
