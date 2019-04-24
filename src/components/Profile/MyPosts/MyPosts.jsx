import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

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
				<Post message="aaaaa aaaaaa" likeCount="1" />
				<Post message="bbbbbb bbbbbbb" likeCount="4" />
			</div>
		</div>
	);
};

export default MyPosts;
