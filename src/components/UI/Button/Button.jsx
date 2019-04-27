import React from 'react';
import classes from './Button.module.css';

const Button = props => {
	const { buttonHandler, text } = props;

	return (
		<button className={classes.item} onClick={buttonHandler}>
			{text}
		</button>
	);
};

export default Button;
