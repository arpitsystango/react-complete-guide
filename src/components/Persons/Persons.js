import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor");

    this.state = {
      persons: [
        { id: "a", name: "Arpit", age: 22 },
        { id: "b", name: "Aditya", age: 14 },
        { id: "c", name: "Aditi", age: 22 }
      ],
      otherState: 'some other value.',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }

  render() {
    console.log("[Persons.js] Inside render()");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={this.props.clicked.bind(null, index)}
          key={person.id}
          changed={this.props.changed.bind(this, person.id)}
        />
      );
    });
  }
}

export default Persons;