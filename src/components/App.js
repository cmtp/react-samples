import React from 'react';
import Popup from 'react-popup';
import Helmet from 'react-helmet';

import Person from './Person/Person';
// import Calculator from './Calculator/Calculator';
// import Xss from './Xss/Xss';
// import Numbers from './Numbers/Numbers';
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

// import { notes1, notes2 } from './Notes/data';

import './App.css';
import './Popup.css';

const App = () => (
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //     notes: notes1
  //   // };

  //   // this.state = {
  //   //   chartType: 'line',
  //   // };

  //   this.columns = [
  //     ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
  //     ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
  //     ['XRP', 100, 200, 300, 500, 400, 300],
  //   ];
  // }

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
  <div className="App">
    <Helmet
      title="Person Information"
      meta={[
        { name: 'title', content: 'Person Information' },
        { name: 'description', content: 'This recipe talks about React Helmet' }
      ]}
    />
    <Header title="Welcome to CodeJobs" />
    <Content>
      <Person />
      {/* <Calculator /> */}
      {/* <Xss /> */}
      {/* <Numbers /> */}
      {/* <Animation /> */}
      {/* <Chart columns={this.columns} */}
      {/* chartType={this.state.chartType} */}
      {/* /> */}
      {/* <p> */}
      {/* Chart Type */}
      {/* <button onClick={this.setBarChart}>Bar</button> */}
      {/* <button onClick={this.setLineChart}>Line</button> */}
      {/* </p> */}

      {/* <Notes notes={this.state.notes}/> */}
      {/* <Coins /> */}
      {/* <Timer /> */}
      {/* <Todo /> */}
      {/* <Home/> */}
    </Content>
    <Footer />

    <Popup />
  </div>
);

export default App;
