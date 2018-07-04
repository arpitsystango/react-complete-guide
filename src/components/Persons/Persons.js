import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
  props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        click={props.clicked.bind(null, index)}
        key={person.id}
        changed={props.changed.bind(this, person.id)}
      />
    );
  })
);

export default persons;