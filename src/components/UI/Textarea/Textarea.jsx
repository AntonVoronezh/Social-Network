import React from './node_modules/react';
import classes from './Textarea.module.css';

const Textarea = props => {
	return (
		<textarea className={classes.item} onClick={props.buttonHandler}>
			{props.text}
		</textarea>
	);
};

export default Textarea;
