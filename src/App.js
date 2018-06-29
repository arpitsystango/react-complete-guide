import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: "a", name: "Arpit", age: 22 },
      { id: "b", name: "Aditya", age: 14 },
      { id: "c", name: "Aditi", age: 22 }
    ],
    otherState: 'some other value.',
    showPersons: false
  }

  nameChangedHandler = (personId, event) => {
    const personIndex = this.state.persons.findIndex(person => person.id === personId);
    let person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personId] = person;
    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons]; // More modern way
    persons.splice(personIndex, 1);
    this.setState({persons});
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
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  click={this.deletePersonHandler.bind(this, index)}
                  key={person.id}
                  changed={this.nameChangedHandler.bind(this, person.id)}
                />
              );
            })
          }
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
