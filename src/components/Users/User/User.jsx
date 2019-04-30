import React from 'react';
import classes from './User.module.css';

const User = props => {
	return <div className={classes.user}>
	
	{props.status.id}
	
	</div>;
};

export default User;
