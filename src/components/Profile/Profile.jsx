import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyProfile from './MyProfile/MyProfile';

const Profile = props => {
	const { posts } = props.state;
	const { addPost } = props;
	
	return (
		<div className={classes.content}>
			<MyProfile />
			<MyPosts posts={posts} addPost={addPost} />
		</div>
	);
};

export default Profile;
