import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={classes.content}>
			<div>
				<img src="https://awesomeworld.ru/wp-content/uploads/2017/11/nebo_7-560x280.jpg" alt="d" />
			</div>
			<div>ava + description</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
