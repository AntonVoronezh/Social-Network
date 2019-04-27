import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
	const { addPostCallback, addNewMessageCallback, newMessageText, posts } = props;

	const postsData = posts.map(p => <Post message={p.message} id={p.id} key={p.id} likeCount={p.likeCount} />);

	const buttonHandler = () => {
		addPostCallback();
	};
	const textareaHandler = event => {
		const text = event.target.value;
		
		addNewMessageCallback(text);
	};

	return (
		<div className={classes.content}>
			<h3>New post</h3>
			<div>
				<div>
					<textarea onChange={textareaHandler} value={newMessageText} />
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
