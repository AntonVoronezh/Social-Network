import React from 'react';
import classes from './Button.css';

const Button = props => {
	return (
		<button className={classes.item} onClick={props.buttonHandler}>
			{props.text}
		</button>
	);
};

export default Button;
