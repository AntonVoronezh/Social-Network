import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const dialogsData = [
	{ id: 1, name: '1111111' },
	{ id: 2, name: '2222222' },
	{ id: 3, name: '333333' },
	{ id: 4, name: '44444444' },
	{ id: 5, name: '5555555' },
	{ id: 6, name: '6666666' },
];
const messagesData = [
	{ id: 1, text: '111 11111 11111 1111111' },
	{ id: 2, name: '222 2222 22222 22222' },
	{ id: 3, name: '33 33 333333 3333' },
];

const Dialog = props => {
	const path = `/dialogs/${props.id}`;

	return (
		<div className={`${classes.item}`}>
			<NavLink to={path} activeClassName={classes.myActive}>
				{props.name}
			</NavLink>
		</div>
	);
};

const Message = props => {
	return <div className={classes.message}>{props.text}</div>;
};

const Dialogs = props => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.items}>
				<Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
				<Dialog name="2222" id="2" />
				<Dialog name="3333" id="3" />
				<Dialog name="4444" id="4" />
			</div>
			<div className={classes.messages}>
				<Message text={messagesData[0].text} id={messagesData[0].id} />
				<Message text="ssssss" />
				<Message text="ddddddd" />
			</div>
		</div>
	);
};

export default Dialogs;
