import React from 'react';
import classes from './Dialogs.module.css';
import DialogContainer from './Dialog/DialogContainer';
import MessageContainer from './Message/MessageContainer';
import { addNewDialogActionCreator, addDialogActionCreator } from '../../redux/reducers/dialogReducer';

const Dialogs = props => {
	const { dialogs, messages, newDialogText } = props.state;
	const { dispatch } = props;

	const buttonHandler = () => {
		const action = addDialogActionCreator();

		dispatch(action);
	};

	const textareaHandler = event => {
		const text = event.target.value;
		const action = addNewDialogActionCreator(text);

		dispatch(action);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogContainer}>
				<DialogContainer dialogs={dialogs} />
			</div>
			<div>
				<div className={classes.messages}>
					<MessageContainer messages={messages} />
				</div>
				<div>
					<div>
						<textarea value={newDialogText} onChange={textareaHandler} />
					</div>
					<div>
						<button onClick={buttonHandler}>sub</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
