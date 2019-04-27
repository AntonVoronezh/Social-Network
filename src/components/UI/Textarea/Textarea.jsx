import React from 'react';
import classes from './Textarea.module.css';

const Textarea = props => {
	const {textareaHandler, newMessageText, placeholder, text} = props;

	return (
		<textarea
			className={classes.item}
			onChange={textareaHandler}
			value={newMessageText}
			placeholder={placeholder}
		>
			{text}
		</textarea>
	);
};

export default Textarea;
