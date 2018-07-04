import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import classes from './App.css';

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
    debugger
    console.log(this.arpit);
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

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
