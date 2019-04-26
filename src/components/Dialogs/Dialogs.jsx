import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addNewDialogActionCreator, addDialogActionCreator } from '../../redux/reducers/dialogReducer';

const Dialogs = props => {
	const { dialogs, messages, newDialogText } = props.state;
	const { dispatch } = props;

	const dialogsData = dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);
	const messagesData = messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

	const textareaData = React.createRef();

	const buttonHandler = () => {
		const action = addDialogActionCreator();

		dispatch(action);
	};

	const textareaHandler = () => {
		const text = textareaData.current.value;
		const action = addNewDialogActionCreator(text);

		dispatch(action);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.items}>{dialogsData}</div>
			<div className={classes.messages}>
				{messagesData}
				<div>
					<textarea ref={textareaData} value={newDialogText} onChange={textareaHandler} />
				</div>
				<div>
					<button onClick={buttonHandler}>sub</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
