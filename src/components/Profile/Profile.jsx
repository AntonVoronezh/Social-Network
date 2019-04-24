import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyProfile from './MyProfile/MyProfile';

const Profile = () => {
	return (
		<div className={classes.content}>
			<MyProfile />
			<MyPosts />
		</div>
	);
};

export default Profile;
