import React from 'react';
import classes from './Textarea.module.css';

const Textarea = props => {
	const {textareaHandler, value, placeholder, text} = props;
	
	return (
		<textarea
			className={classes.item}
			onChange={textareaHandler}
			value={value}
			placeholder={placeholder}
		>
			{text}
		</textarea>
	);
};

export default Textarea;
