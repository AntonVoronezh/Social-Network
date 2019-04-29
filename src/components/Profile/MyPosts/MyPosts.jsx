import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ProfileFormContainer from '../ProfileForm/ProfileFormContainer';
// import Button from '../../UI/Button/Button';
// import Textarea from '../../UI/Textarea/Textarea';

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
				{/* <Textarea textareaHandler={textareaHandler} value={newMessageText} placeholder={''} />
					{/* <textarea onChange={textareaHandler} value={newMessageText} placeholder={''} /> */}
				{/* </div>
				<div> */}
				{/* <Button buttonHandler={buttonHandler} text={'Добавить пост'} /> */}
				{/* </div> */}
				<ProfileFormContainer />
			</div>
			<div className={classes.posts}>{postsData}</div>
		</div>
	);
};

export default MyPosts;
