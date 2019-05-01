import React from 'react';
import classes from './User.module.css';
import Button from '../../UI/Button/Button';
import Img from '../../../assets/img/1.png'

const User = props => {
	const { photos, name, followFlag, id, status } = props.status;

	return (
		<div className={classes.user}>
			<div className={classes.followBlock}>
				<img src={photos.small} alt={name} />
				{followFlag ? (
					<Button buttonHandler={() => props.unfollowCB(id)} text="UnFollow" />
				) : (
					<Button buttonHandler={() => props.followCB(id)} text="Follow" />
				)}
			</div>
			<div className={classes.infoBlock}>
				<div>
					{name}
					{status}
				</div>
				<div>
					{'location.country'}
					{'location.sity'}
				</div>
			</div>
		</div>
	);
};

export default User;
