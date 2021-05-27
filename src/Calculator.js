import React, { Component } from 'react';
import './App.css';


class Calculator extends Component{

  state={
    operator: '', 
    inputOne: '',
    inputTwo: '',
    total: ''
  }

  setOperator = (e, op) => {
    this.setState({ [op]: e.target.value});
  }

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value});
  }

  calculate = () => {
    if (this.state.operator === 'add') {
      this.addNumbers()
    } 
    if (this.state.operator === 'subtract') {
      this.subtractNumbers()
    }
    if (this.state.operator === 'multiply') {
      this.multiplyNumbers()
    } 
    if (this.state.operator === 'divide'){
      this.divideNumbers()
    }
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
  subtractNumbers = () => {
    let yourTotal = parseInt(this.state.inputOne) - parseInt(this.state.inputTwo);
    this.setState({
      inputOne: '',
      inputTwo: '',
      total: yourTotal
    })
  }
  multiplyNumbers = () => {
    let yourTotal = parseInt(this.state.inputOne) * parseInt(this.state.inputTwo);
    this.setState({
      inputOne: '',
      inputTwo: '',
      total: yourTotal
    })
  }
  divideNumbers = () => {
    let yourTotal = parseInt(this.state.inputOne) / parseInt(this.state.inputTwo);
    this.setState({
      inputOne: '',
      inputTwo: '',
      total: yourTotal
    })
  }
  render(){
    return (
      <div className="container">
            <h1>Calculate with React!</h1>
            <h2>Select your operator, input your numbers and go!</h2>
        <div className="calculate">
            <input type="number" value={this.state.inputOne} onChange={ (e) => this.setNum(e, 'inputOne') }/>
            <div className="calculateButtons">
                  <button value='add' onClick={ (e) => this.setOperator(e, 'operator')}> + </button>
                  <button value='subtract' onClick={ (e) => this.setOperator(e, 'operator')}> &minus; </button>
                  <button value='multiply' onClick={ (e) => this.setOperator(e, 'operator')}> &times; </button>
                  <button value='divide' onClick={ (e) => this.setOperator(e, 'operator')}> &divide; </button>
            </div>
            <input type="number"  value={this.state.inputTwo} onChange={ (e) => this.setNum(e, 'inputTwo') }/>
            <div className="calculateButtons">
              <button class="submit" onClick={this.calculate}>Calculate</button>
            </div>
          </div>
          <div>
            <h3>Your total is: {this.state.total}</h3>
          </div>
      </div>
    );
  }
}


export default Calculator;
