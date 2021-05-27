# react-calculator

This project was my first attempt at building a react project. The goal was to work on creating responsive elements and rendering them inside of a class component

## Set Up

1. Fork and Clone this respository to your local machine
2. Open the directory in your text editor of choice to view or edit the code
3. Run npm install to install dependencies
4. Run npm start to view app in your localhost

## Used Technologies

- Css & React

## Process Work

1. I started by creating a Calculator class and determing what state attributes I needed to track. Since I wanted to be able to calculate numbers I knew I needed to track:

   - the first number the user inputs
   - the second number the user inputs
   - the total of those two numbers
   - and eventually the type of operator used

All of which where created and set to empty strings.

2. After establishing the basic layout of my JSX and I created input fields that onChange would run the setNum function and fill those state values.

3. I created a similar function to set which operator the user was using (setOperator) on the click of a button.

```JSX
<button value='multiply' onClick={ (e) => this.setOperator(e, 'operator')}> * </button>
```

4. A button was added to the end on the component that onClick would run the calculate helper function.

```JSX
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
```

5. After the requested function was run, the state attributes would be reset to empty strings except for the total, which would render the result of the selected calculation.

## Status

🎊 Complete 🎊
