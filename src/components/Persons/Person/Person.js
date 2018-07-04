import React, { Component } from 'react';
import PersonCSS from './Person.css';

class Person extends Component {
  render() {
    return (
      <div className={PersonCSS.Person}>
        <p onClick={props.click}>I am a {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    );
  }
}

export default Person;