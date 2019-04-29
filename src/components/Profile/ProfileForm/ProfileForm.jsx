import React from 'react';
import classes from './ProfileForm.module.css';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';

const ProfileForm = props => {
	const buttonHandler = () => {
		props.addPostCallback();
	};

	const textareaHandler = event => {
		const text = event.target.value;

		props.addNewMessageTextCallback(text);
	};

	return (
		<div className={classes.form}>
			<Textarea textareaHandler={textareaHandler} value={props.newMessageText} placeholder={''} />
			<Button buttonHandler={buttonHandler} text={'Добавить пост'} />
		</div>
	);
};

export default ProfileForm;
