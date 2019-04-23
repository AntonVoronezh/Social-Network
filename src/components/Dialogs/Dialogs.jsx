import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = props => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.items}>
				<div className={`${classes.items} ${classes.active}`}>
					<NavLink to="/dialogs/1" activeClassName={classes.items}>
						11111
					</NavLink>
				</div>
				<div className={classes.items}>
					<NavLink to="/dialogs/2" activeClassName={classes.items}>
						22222
					</NavLink>
				</div>
				<div className={classes.items}>
					<NavLink to="/dialogs/3" activeClassName={classes.items}>
						333333
					</NavLink>
				</div>
				<div className={classes.items}>
					<NavLink to="/dialogs/4" activeClassName={classes.items}>
						4444444
					</NavLink>
				</div>
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
