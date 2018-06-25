import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Arpit", age: 22 },
      { name: "Aditya", age: 14 },
      { name: "Aditi", age: 22 }
    ]
  }

  switchNameHandler = () => {
    // console.log("Button Clicked!");
    this.setState({
      persons: [
        { name: "Arpit Parmar", age: 22 },
        { name: "Aditya Parmar", age: 15 },
        { name: "Aditi Soni", age: 21 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>I am React Component!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
