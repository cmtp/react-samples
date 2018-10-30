import React, {Component} from 'react';

import Notes from './Notes/Notes';
// import Coins from './Coins/Coins';
// import Timer from './Pomodoro/Timer';
// import Todo from './Todo/Todo';
// import Home from './Home/Home';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import { notes1, notes2 } from './Notes/data';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            notes: notes1
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                notes: [...this.state.notes, ...notes2]
            });
        }, 10000);
    }

    componentWillUnmount() {
        console.log('I\'ll be back! ');
        document.body.style = 'background: black;';
        document.getElementById('unmountMessage').style.color = 'white';
    }

    render() {
        return (
            <div className="App">
                <Header title="Welcome to CodeJobs"/>
                <Content>
                    <Notes notes={this.state.notes}/>
                    {/*<Coins />*/}
                    {/*<Timer />*/}
                    {/*<Todo />*/}
                    {/*<Home/>*/}
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default App;
