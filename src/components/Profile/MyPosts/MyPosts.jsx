import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const postsData = [
	{ id: 1, message: 'aaaaa aaaaaa', likeCount: 11 },
	{ id: 2, message: 'bbbbbb bbbbb', likeCount: 16 },

];

const MyPosts = () => {
	return (
		<div className={classes.content}>
			<h3>New post</h3>
			<div>
				<div>
					<textarea />
				</div>
				<div>
					<button>sub</button>
				</div>
			</div>
			<div className={classes.posts}>
				<Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
				<Post message="bbbbbb bbbbbbb" likeCount="4" />
			</div>
		</div>
	);
};

export default MyPosts;
