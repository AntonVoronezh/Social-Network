import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = props => {
	const { dialogs, messages } = props.state;

	const dialogsData = dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);
	const messagesData = messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

	const textareaData = React.createRef();

	const buttonHandler = () => {
		console.log('buttonHandler from Dialogs ', textareaData.current.value);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.items}>{dialogsData}</div>
			<div className={classes.messages}>
				{messagesData}
				<div>
					<textarea ref={textareaData} />
				</div>
				<div>
					<button onClick={buttonHandler}>sub</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
