import './home.styl';
import React, { Component } from 'react';
import 'isomorphic-unfetch';

import LiabilityItem from '../components/LiablilityItem';
import Index from '../components/AddLiability';
import Layout from '../components/Layout';

export default class HomePage extends Component {
  constructor () {
    super();
    this.state = {
      liabilities: []
    };
  }

  addLiability = ({ title, amount }) => {
    const {
      liabilities
    } = this.state;

    liabilities.push({ title, amount });

    this.setState({ liabilities });
  }

  removeLiability (title) {
    const liabilityToRemoveIndex = this.state.liabilities.indexOf(
      this.state.liabilities.find(item => item.title === title)
    );

    this.state.liabilities.splice(liabilityToRemoveIndex, 1);

    this.setState({
      liabilities: this.state.liabilities
    });
  }

  render () {
    const {
      liabilities
    } = this.state;

    return (
      <Layout>
        {
          liabilities && !!liabilities.length &&
          <ul>
            {
              liabilities.map(({ title, amount }) => {
                return (
                  <LiabilityItem
                    title={title}
                    amount={amount}
                    removeClicked={this.removeLiability.bind(this)}
                    key={title}
                  />
                );
              })
            }
          </ul>
        }
        {
          !liabilities.length &&
          <div>
            You must be a happy person. You don't have any liabilities.
          </div>
        }
        <Index save={this.addLiability} />
      </Layout>
    );
  }
}
