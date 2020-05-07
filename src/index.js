import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { count: 0 }

  getCount = (newCount) => {
    this.setState({ count: newCount })
  }

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} />
        <Counter getCount={this.getCount} />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.state.count + upToNext}`;
  };

  render() {
    console.log("Header count:", this.props.count)
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Counter extends Component {
  state = { count: 0 };


  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.props.getCount(this.state.count)
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
    this.props.getCount(this.state.count)
  };



  render() {

    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
