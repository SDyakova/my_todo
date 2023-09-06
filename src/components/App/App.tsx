import React from 'react';
import { ReactDOM } from 'react';
import classes from './App.module.scss';
import NewTaskForm from '../NewTaskForm';

function App() {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>todos</h1>
      <NewTaskForm />
    </div>
  );
}

export default App;
