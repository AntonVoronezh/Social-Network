// import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, addNewMessageActionCreator } from '../../../redux/reducers/profileReducer';
import { connect } from 'react-redux';

// const MyPostsContainer = props => {
// 	const { posts, dispatch, newMessageText } = props;

// 	const addPostCallback = () => {
// 		const action = addPostActionCreator();

// 		dispatch(action);
// 	};
// 	const addNewMessageCallback = text => {
// 		const action = addNewMessageActionCreator(text);

// 		dispatch(action);
// 	};

// 	return (
// 		<MyPosts
// 			newMessageText={newMessageText}
// 			addPostCallback={addPostCallback}
// 			addNewMessageCallback={addNewMessageCallback}
// 			posts={posts}
// 		/>
// 	);
// };

const mapStateToProps = state => {
	return {
		newMessageText: state.profilePage.newMessageText,
		posts: state.profilePage.posts,
	};
};

const mapDispatchToProps = dispatch => {
	return {


	};
};

const MyPostsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
