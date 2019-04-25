import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyProfile from './MyProfile/MyProfile';

const Profile = props => {
	const { posts, newMessageText } = props.state;
	const { addPost, addNewMessageText } = props;
	
	return (
		<div className={classes.content}>
			<MyProfile />
			<MyPosts
				posts={posts}
				addPost={addPost}
				newMessageText={newMessageText}
				addNewMessageText={addNewMessageText}
			/>
		</div>
	);
};

export default Profile;
