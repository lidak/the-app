import './home.styl';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';

import LiabilityItem from '../components/LiablilityItem';
import AddLiability from '../components/AddLiability';
import Layout from '../components/Layout';

class HomePage extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  constructor () {
    super();
    this.state = {
      liabilities: []
    };
  };

  addLiability = ({ title, amount }) => {
    const {
      liabilities
    } = this.state;

    liabilities.push({ title, amount });

    this.setState({ liabilities });
  };

  removeLiability (title) {
    const liabilityToRemoveIndex = this.state.liabilities.indexOf(
      this.state.liabilities.find(item => item.title === title)
    );

    this.state.liabilities.splice(liabilityToRemoveIndex, 1);

    this.setState({
      liabilities: this.state.liabilities
    });
  };

  render () {
    const {
      liabilities
    } = this.state;

    const { user } = this.props;

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
          user.name && user.name.length &&
          <>
            {
              !liabilities.length &&
              <div>
                You must be a happy person. You don't have any liabilities.
              </div>
            }
            <AddLiability save={this.addLiability} />
          </>
        }

      </Layout>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(HomePage);
