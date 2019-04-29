import React from 'react';
import classes from './DialogForm.module.css';

const Message = props => <div className={classes.message}>{props.text}</div>;

export default Message;
