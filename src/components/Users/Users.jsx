import React from 'react';
import classes from './Users.module.css';
import User from './User/User';

const Users = props => {
	const users = props.users.map(u => {
		return <User key={u.id} status={u} />;
	});

	return <div className={classes.users}>{users}</div>;
};

export default Users;
