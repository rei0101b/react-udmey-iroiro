import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../components/hoc/Aux';

const cockpit = (props) => {
  const btnClass = props.showPersons ? [classes.Button ,classes.Red].join(' '): classes.Button;
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return(
    <Aux>
      <h1>Hi, I'm a React app</h1>
      <p className={assignedClasses.join(' ')}>really world</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Person</button>
      <button onClick={props.login}>Log In</button>
    </Aux> 
  );
};

export default cockpit;