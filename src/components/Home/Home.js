import React, { Component } from  'react';

import './Home.css';

class Home extends Component {
    render() {

        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid black'
        };

        return (
            <div className="Home">
                <h1>Welcome to Codejobs</h1>

                <p>
                    In this recipe you will learn how to add styles to components.
                    If tyou wabt to loearn more you can visit our Youtube Channel at
                    <a href="http://youtube.com/codejobs">Codejobs</a>
                </p>
                <p>
                    <button style={{buttonStyle}}>
                        Click me!
                    </button>
                </p>
            </div>

        )
    }
}

export default Home;