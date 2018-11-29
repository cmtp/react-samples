import React, { Component } from 'react';
import './coins.css';

class Coins extends Component {
  constructor() {
    super();

    this.state = {
      dollars: 0,
    };
  }

  shouldComponentUpdate = (props, state) => state.dollars % 10 === 0;

  handleOnChange = e => {
    this.setState({
      dollars: Number(e.target.value || 0),
    });
  };

  render() {
    return (
      <div className="Coins">
        <h1>Buy Crypto Coins!</h1>

        <div className="question">
          <p>How much dollars do you have?</p>

          <p>
            <input type="text" placeholder="0" onChange={this.handleOnChange} />
          </p>
        </div>

        <div className="answer">
          <p>Crypto Coin price: $10</p>
          <p>
            You can buy <strong>{this.state.dollars / 10}</strong> coins.
          </p>
        </div>
      </div>
    );
  }
}

export default Coins;
