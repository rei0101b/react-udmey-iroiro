import React, { PureComponent } from 'react';
import Person from './Person/Person';
import classes from './Persons.css';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] construcloer', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] componentWillMount()')
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount()')
    console.log('lastPersonRef:', this.lastPersonRef.current)
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componenteWillReceiveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] inside render()')
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        ref={this.lastPersonRef}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;