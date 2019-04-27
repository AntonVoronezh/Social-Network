import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyProfileContainer from './MyProfile/MyProfileContainer';

const Profile = props => {
	const { posts, newMessageText } = props.state;
	const { dispatch } = props;

	return (
		<div className={classes.content}>
			<MyProfileContainer />
			<MyPosts posts={posts} dispatch={dispatch} newMessageText={newMessageText} />
		</div>
	);
};

export default Profile;
