import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
	const postsData = props.posts.map(p => <Post message={p.message} id={p.id} key={p.id} likeCount={p.likeCount} />);

	const textareaData = React.createRef();

	const buttonHandler = () => {
		console.log('buttonHandler from MyPosts ', textareaData.current.value);
	};

	return (
		<div className={classes.content}>
			<h3>New post</h3>
			<div>
				<div>
					<textarea ref={textareaData} />
				</div>
				<div>
					<button onClick={buttonHandler}>sub</button>
				</div>
			</div>
			<div className={classes.posts}>{postsData}</div>
		</div>
	);
};

export default MyPosts;
