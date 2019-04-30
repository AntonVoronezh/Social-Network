import React from 'react';
import classes from './User.module.css';
import Button from '../../UI/Button/Button';

const User = props => {
	return (
		<div className={classes.user}>
			<div className={classes.followBlock}>
				<img src={props.status.img} alt="dd" />
				{props.followFlag ? (
					<Button buttonHandler={props.unfollowCB} text="UnFollow" />
				) : (
					<Button buttonHandler={props.followCB} text="Follow" />
				)}
			</div>
			<div className={classes.infoBlock}>
				<div>
					{props.status.firstName}
					{props.status.status}
				</div>
				<div>
					{props.status.location.country}
					{props.status.location.sity}
				</div>
			</div>
		</div>
	);
};

export default User;
