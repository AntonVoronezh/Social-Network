import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

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
				<Dialog name="1111" id="1" />
				<Dialog name="2222" id="2" />
				<Dialog name="3333" id="3" />
				<Dialog name="4444" id="4" />
			</div>
			<div className={classes.messages}>
				<Message text="aaaaaaaa" />
				<Message text="ssssss" />
				<Message text="ddddddd" />
			</div>
		</div>
	);
};

export default Dialogs;
