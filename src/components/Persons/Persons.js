import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
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