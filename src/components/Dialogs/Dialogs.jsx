import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = props => {
	const { dialogs, messages } = props.state;

	const dialogsData = dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);
	const messagesData = messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.items}>{dialogsData}</div>
			<div className={classes.messages}>{messagesData}</div>
		</div>
	);
};

export default Dialogs;
