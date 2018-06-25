import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Arpit", age: 22 },
      { name: "Aditya", age: 14 },
      { name: "Aditi", age: 22 }
    ],
    otherState: 'some other value.',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log("Button Clicked!");
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Aditya Parmar", age: 15 },
        { name: "Aditi Soni", age: 21 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Arpit", age: 22 },
        { name: event.target.value, age: 14 },
        { name: "Aditi", age: 22 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Use this more often")}
            changed={this.nameChangedHandler}
          />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I am React Component!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
