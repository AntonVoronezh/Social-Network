import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyProfile from './MyProfile/MyProfile';

const posts = [{ id: 1, message: 'aaaaa aaaaaa', likeCount: 11 }, { id: 2, message: 'bbbbbb bbbbb', likeCount: 16 }];


const Profile = () => {
	return (
		<div className={classes.content}>
			<MyProfile />
			<MyPosts posts={posts}/>
		</div>
	);
};

export default Profile;
