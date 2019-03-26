import React, { Component } from 'react';
import { Button } from 'react-materialize';
import PropTypes from 'prop-types';

export default class AddLiability extends Component {
  static propTypes = {
    save: PropTypes.func
  }

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
  };

  changeAmount = (e) => {
    this.setState({
      amount: e.target.value
    });
  };

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
  };

  render () {
    const {
      title,
      amount
    } = this.state;

    return (
      <div className="add-liability">
        <Button onClick={this.addClicked}>Add</Button>
        <input
          type="text"
          onChange={this.changeTitle}
          value={title}
          placeholder="Liability title"
        />
        <input
          type="number"
          value={amount}
          onChange={this.changeAmount}
          placeholder="Amount"
        />
      </div>
    );
  }
}
