import React from 'react';
import classes from './Textarea.module.css';

const Textarea = props => {
	return (
		<textarea
			className={classes.item}
			onChange={props.textareaHandler}
			value={props.newMessageText}
			placeholder={props.placeholder}
		>
			{props.text}
		</textarea>
	);
};

export default Textarea;
