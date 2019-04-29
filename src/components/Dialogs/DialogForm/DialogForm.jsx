import React from 'react';
import classes from './DialogForm.module.css';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';

const DialogForm = props => {
	const buttonHandler = () => {
		props.addDialogCallback();
	};

	const textareaHandler = event => {
		const text = event.target.value;

		props.addNewDialogTextCallback(text);
	};

	return (
		<div className={classes.form}>
			<Textarea textareaHandler={textareaHandler} value={props.newMessageText} placeholder={''} />
			<Button buttonHandler={buttonHandler} text={'Добавить пост'} />
		</div>
	);
};

export default DialogForm;
