import React, { Component, Fragment } from 'react';
import PersonCSS from './Person.css';
import WithClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor");

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
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Fragment>
        <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Fragment>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
};

export default WithClass(Person, PersonCSS.Person);