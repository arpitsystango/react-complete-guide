import React, { PureComponent, Fragment } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import classes from './App.css';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor");

    this.state = {
      persons: [
        { id: "a", name: "Arpit", age: 22 },
        { id: "b", name: "Aditya", age: 14 },
        { id: "c", name: "Aditi", age: 22 }
      ],
      otherState: 'some other value.',
      showPersons: false,
      togglePersonCount: 0,
      isAuthenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // # Note: React has already got an inbuilt PureComponent class for this.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     { id: "a", name: "Arpit", age: 22 },
  //     { id: "b", name: "Aditya", age: 14 },
  //     { id: "c", name: "Aditi", age: 22 }
  //   ],
  //   otherState: 'some other value.',
  //   showPersons: false
  // }

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
    let doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      console.log(props);
      return {
        showPersons: !doesShow,
        togglePersonCount: prevState.togglePersonCount + 1
      };
    });
  }

  loginHandler = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  }

  render() {
    console.log("[App.js] Inside render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <Fragment>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          login={this.loginHandler}
          isAuthenticated={this.state.isAuthenticated}
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        <AuthContext.Provider value={this.state.isAuthenticated}>{persons}</AuthContext.Provider>
      </Fragment>
    );
  }
}

export default withClass(App, classes.App);
