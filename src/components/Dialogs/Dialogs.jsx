import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = props => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.items}>
				<div className={`${classes.items} ${classes.active}`}>11111111</div>
				<div className={classes.items}>222222</div>
				<div className={classes.items}>333333</div>
				<div className={classes.items}>444444</div>
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
