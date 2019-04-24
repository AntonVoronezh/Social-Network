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

const Dialogs = props => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.items}>
				<Dialog name="1111" id="1" />
				<Dialog name="2222" id="2" />
				<Dialog name="3333" id="3" />
			</div>
			<div className={classes.messages}>
				<div className={classes.message}>aaaaa</div>
				<div className={classes.message}>ssssss</div>
				<div className={classes.message}>ddddddd</div>
			</div>
		</div>
	);
};

export default Dialogs;
