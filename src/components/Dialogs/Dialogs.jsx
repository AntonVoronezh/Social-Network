import React from 'react';
import classes from './Dialogs.module.css';
import DialogContainer from './Dialog/DialogContainer';
import Message from './Message/Message';
import { addNewDialogActionCreator, addDialogActionCreator } from '../../redux/reducers/dialogReducer';

const Dialogs = props => {
	const { dialogs, messages, newDialogText } = props.state;
	const { dispatch } = props;

	// const dialogsData = dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);
	const messagesData = messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

	// const textareaData = React.createRef();

	const buttonHandler = () => {
		const action = addDialogActionCreator();

		dispatch(action);
	};

	const textareaHandler = event => {
		// const text = textareaData.current.value;
		const text = event.target.value;
		const action = addNewDialogActionCreator(text);

		dispatch(action);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogContainer}>
				<DialogContainer dialogs={dialogs} />
			</div>

			<div className={classes.messages}>
				{messagesData}
				<div>
					{/* <textarea ref={textareaData} value={newDialogText} onChange={textareaHandler} /> */}
					<textarea value={newDialogText} onChange={textareaHandler} />
				</div>
				<div>
					<button onClick={buttonHandler}>sub</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
