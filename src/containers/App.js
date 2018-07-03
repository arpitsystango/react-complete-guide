import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import appCssClasses from './App.css';

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
    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons]; // More modern way
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    let persons = null;
    let btnClass = '';

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

      btnClass = appCssClasses.Red;
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(appCssClasses.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(appCssClasses.bold);
    }

    return (
      <div className={appCssClasses.App}>
        <h1>I am React Component!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button
          className={btnClass}
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
