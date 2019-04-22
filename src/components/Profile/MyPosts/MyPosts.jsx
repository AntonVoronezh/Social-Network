import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={classes.content}>
			<div>New post</div>
			<div className={classes.posts}>
				<Post message="aaaaa aaaaaa" likeCount="1"/>
				<Post message="bbbbbb bbbbbbb" likeCount="4"/>
			</div>
		</div>
	);
};

export default MyPosts;
