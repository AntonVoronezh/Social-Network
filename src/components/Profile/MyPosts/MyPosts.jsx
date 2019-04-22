import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
	return (
		<div className={classes.content}>
			<div>New post</div>
			<div className={classes.posts}>
				<div className={classes.item}>post 1</div>
				<div className={classes.item}>post 2</div>
			</div>
		</div>
	);
};

export default MyPosts;
