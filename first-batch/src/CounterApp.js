import React, { Component } from 'react';

class CounterApp extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  inDecrement = () => {
      this.setState({ count:this.state.count - 1});
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.incrementCount}
           disabled = {this.state.count === 10}> + </button>
           <button onClick={this.inDecrement}
           disabled = {this.state.count === 0}> - </button>
      </div>
    );
  }
}

export default CounterApp;