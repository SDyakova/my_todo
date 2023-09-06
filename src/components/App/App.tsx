import React from 'react';
import { ReactDOM } from 'react';
import classes from './App.module.scss';
import NewTaskForm from '../NewTaskForm';
import Task from '../Task/Task';

const App = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>todos</h1>
      <NewTaskForm />
      <Task />
    </div>
  );
};

export default App;
