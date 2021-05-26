import React, { Component } from 'react';
import './App.css';


class Calculator extends Component{

  state={
    inputOne: '',
    inputTwo: '',
    total: ''
  }
  setNum = (e, num) => {
    this.setState({ [num]: e.target.value});
  }
  addNumbers = () => {
    // console.log(`you want to add ${this.state.inputOne} and ${this.state.inputTwo}?`);
    let yourTotal = parseInt(this.state.inputOne) + parseInt(this.state.inputTwo);
    // console.log(yourTotal);
    this.setState({
      inputOne: '',
      inputTwo: '',
      total: yourTotal
    })
  }
  render(){
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number" 
          placeholder="enter a number" 
          value={this.state.inputOne} 
          onChange={ (e) => this.setNum(e, 'inputOne') }/>
          <span>+</span>
          <input type="number" 
          placeholder="enter another number" value={this.state.inputTwo} 
          onChange={ (e) => this.setNum(e, 'inputTwo') }/>
          <button onClick={this.addNumbers}>=</button>
          <h3>Your total is: {this.state.total}</h3>
        </div>
      </div>
    );
  }
}


export default Calculator;
