import React, {Component} from 'react';

import Numbers from './Numbers/Numbers';
// import Animation from './Animation/Animation';
// import Chart from './Chart/Chart';
// import Notes from './Notes/Notes';
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
    constructor(props) {
        super(props);

        // this.state = {
        //     notes: notes1
        // };

        this.state = {
            chartType: 'line'
        };

        this.columns =
            [
                ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
                ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
                ['XRP', 100, 200, 300, 500, 400, 300]
        ];
    }

    // setBarChart = () => {
    //     this.setState({
    //         chartType: 'bar'
    //     });
    // }
    //
    // setLineChart = () => {
    //     this.setState({
    //         chartType: 'line'
    //     });
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             notes: [...this.state.notes, ...notes2]
    //         });
    //     }, 10000);
    // }
    //
    // componentWillUnmount() {
    //     console.log('I\'ll be back! ');
    //     document.body.style = 'background: black;';
    //     document.getElementById('unmountMessage').style.color = 'white';
    // }

    render() {
        return (
            <div className="App">
                <Header title="Welcome to CodeJobs"/>
                <Content>
                    <Numbers />
                    {/*<Animation />*/}
                    {/*<Chart columns={this.columns}*/}
                           {/*chartType={this.state.chartType}*/}
                    {/*/>*/}
                    {/*<p>*/}
                        {/*Chart Type*/}
                        {/*<button onClick={this.setBarChart}>Bar</button>*/}
                        {/*<button onClick={this.setLineChart}>Line</button>*/}
                    {/*</p>*/}

                    {/*<Notes notes={this.state.notes}/>*/}
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
