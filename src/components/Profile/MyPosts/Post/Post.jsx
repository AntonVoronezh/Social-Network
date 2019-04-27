import React from 'react';
import classes from './Post.module.css';


const Post = props => {
	return (
		<div className={classes.item}>
			<img src="https://r.mradx.net/pictures/16/864A92.jpg" alt="s" />
			<br/>
			{props.message}
			<br/>
			<span>{props.likeCount} likes</span>
		</div>
	);
};

export default Post;
