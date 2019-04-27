import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyProfileContainer from './MyProfile/MyProfileContainer';

const Profile = props => {
	const { posts, newMessageText } = props.state;
	const { dispatch } = props;

	return (
		<div className={classes.content}>
			<MyProfileContainer />
			<MyPostsContainer posts={posts} dispatch={dispatch} newMessageText={newMessageText} />
		</div>
	);
};

export default Profile;
