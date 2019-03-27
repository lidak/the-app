import './home.styl';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';

import LiabilityItem from '../components/LiablilityItem';
import AddLiability from '../components/AddLiability';
import Layout from '../components/Layout';
import { saveLiability, deleteLiability } from '../actions/actionCreators';

class HomePage extends Component {
  static propTypes = {
    user: PropTypes.object,
    saveLiability: PropTypes.func,
    deleteLiability: PropTypes.func,
    liabilities: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      amount: PropTypes.number
    }))
  };

  addLiability = ({ title, amount }) => {
    this.props.saveLiability({ title, amount });
  };

  removeLiability (title) {
    this.props.deleteLiability({ title });
  };

  render () {
    const { user, liabilities } = this.props;

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

const mapStateToProps = ({ user, liabilities }) => ({
  user,
  liabilities
});

const mapDispatchToProps = {
  saveLiability,
  deleteLiability
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
