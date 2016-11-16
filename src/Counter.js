import React, { Component } from 'react';
//import './App.css';

class Counter extends Component {
  constructor(){
    super();
    this.state = {count:0}
    this.incrementCount = this.incrementCount.bind(this);
  } 
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
