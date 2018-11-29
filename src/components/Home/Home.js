import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Chris',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Marcelo',
      });
    }, 1000);
  }

  render() {
    /* eslint-disable no-console */
    console.log('Name:', this.state.name);

    const buttonStyle = {
      backgroundColor: 'gray',
      border: '1px solid black',
    };

    return (
      <div className="Home">
        <h1>Welcome {this.state.name}</h1>

        <p>
          In this recipe you will learn how to add styles to components. If tyou
          wabt to loearn more you can visit our Youtube Channel at
          <a href="http://youtube.com/codejobs">Codejobs</a>
        </p>
        <p>
          <button type="button" style={{ buttonStyle }}>Click me!</button>
        </p>
      </div>
    );
  }
}

export default Home;
