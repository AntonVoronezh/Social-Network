import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyProfileContainer from './MyProfile/MyProfileContainer';

const Profile = () => {
	// const { posts, newMessageText } = props.state;
	// const { dispatch } = props;

	return (
		<div className={classes.content}>
			<MyProfileContainer />
			{/* <MyPostsContainer posts={posts} dispatch={dispatch} newMessageText={newMessageText} /> */}
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
