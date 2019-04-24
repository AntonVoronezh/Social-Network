import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyProfile from './MyProfile/MyProfile';

const Profile = props => {
	return (
		<div className={classes.content}>
			<MyProfile />
			<MyPosts posts={props.posts} />
		</div>
	);
};

export default Profile;
