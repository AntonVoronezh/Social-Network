import React from 'react';
import classes from './MyPosts.module.css';
import MyPosts from './MyPosts';
import { addPostActionCreator, addNewMessageActionCreator } from '../../../redux/reducers/profileReducer';

const MyPostsContainer = props => {
	const { posts, dispatch, newMessageText } = props;

	const addPostCallback = () => {
		const action = addPostActionCreator();

		dispatch(action);
	};
	const addNewMessageCallback = event => {
		const text = event.target.value;
		const action = addNewMessageActionCreator(text);

		dispatch(action);
	};

	return (
		<MyPosts
			newMessageText={newMessageText}
			addPostCallback={addPostCallback}
			addNewMessageCallback={addNewMessageCallback}
		/>
	);
};

export default MyPostsContainer;
