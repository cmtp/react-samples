import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isFirstRender } from '../../shared/utils/frontend';

import './coins.css';

class Coins extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    coins: PropTypes.object,
    fetchCoins: PropTypes.func
  };

  componentWillMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  render() {
    const {
      coins: { coins },
    } = this.props;
    if (isFirstRender(coins)) {
      return null;
    }

    return (
      <div className="Coins">
        <h1>Top 100 Coins</h1>
        <ul>
          {coins.map((coin, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={key}>
              <span className="left">
                {coin.rank} {coin.name} {coin.symbol}
              </span>
              <span className="right">${coin.price_usd}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Coins;
