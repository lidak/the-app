import './home.styl';
import React, { Component } from 'react';
import 'isomorphic-unfetch'

import LiabilityItem from '../components/LiablilityItem'
import AddLiability from '../components/AddLiability';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      liabilities: []
    }
  }

  addLiability = ({title, amount}) => {
    const {
      liabilities
    } = this.state;

    liabilities.push({title, amount});

    this.setState({liabilities});
  }

  removeLiability(title) {
    const liabilityToRemoveIndex = this.state.liabilities.indexOf(
      this.state.liabilities.find(item => item.title === title)
    );

    this.state.liabilities.splice(liabilityToRemoveIndex, 1);

    this.setState({
      liabilities: this.state.liabilities
    });
  }


  render() {
    const {
      liabilities
    } = this.state;

    const {
      hello
    } = this.props;

    return(
      <div className="home-page-container">
        {
          liabilities && !!liabilities.length &&
          <ul>
            {
              liabilities.map(({title, amount}) => {
                return (
                  <LiabilityItem
                    title={title}
                    amount={amount}
                    removeClicked={this.removeLiability.bind(this)}
                  />
                );
              })
            }
          </ul>
        }
        {
          !liabilities.length && <div>You must be a happy person. You don't have any liabilities.</div>
        }
        {hello}
        <AddLiability save={this.addLiability} />
      </div>
    );
  }
}