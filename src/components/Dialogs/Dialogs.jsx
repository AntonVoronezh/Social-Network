import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';

const dialogs = [
	{ id: 1, name: '1111111' },
	{ id: 2, name: '2222222' },
	{ id: 3, name: '333333' },
	{ id: 4, name: '44444444' },
	{ id: 5, name: '5555555' },
	{ id: 6, name: '6666666' },
];
const messages = [
	{ id: 1, text: '111 11111 11111 1111111' },
	{ id: 2, text: '222 2222 22222 22222' },
	{ id: 3, text: '33 33 333333 3333' },
];



const Message = props => {
	return <div className={classes.message}>{props.text}</div>;
};

const Dialogs = props => {
	const dialogsData = dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);
	const messagesData = messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.items}>{dialogsData}</div>;
			<div className={classes.messages}>{messagesData}</div>
		</div>
	);
};

export default Dialogs;
