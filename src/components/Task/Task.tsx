import React, { useState } from 'react';
import { ReactDOM } from 'react';
import classes from './Task.module.scss';

const Task = () => {
  const [inputValue, setInputValue] = useState();
  return <input className={classes.input} />;
};

export default Task;
