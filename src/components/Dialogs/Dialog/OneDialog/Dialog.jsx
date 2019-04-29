import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css';

const Dialog = props => {
	const path = `/dialogs/${props.id}`;
	// 	const dialogsData = dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);

	return (
		<div className={`${classes.item}`}>
			<NavLink to={path} activeClassName={classes.myActive}>
				{props.name}
			</NavLink>
		</div>
	);
};

export default Dialog;
