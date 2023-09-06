import React from 'react';
import { ReactDOM } from 'react';
import classes from './NewTaskForm.module.scss';

function NewTaskForm() {
  return <input className={classes.input} placeholder="Task" />;
}

export default NewTaskForm;
