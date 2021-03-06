const ADD_POST = 'ADD_POST';
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';

const initialState = {
	posts: [{ id: 1, message: 'aaaaa aaaaaa', likeCount: 11 }, { id: 2, message: 'bbbbbb bbbbb', likeCount: 16 }],
	newMessageText: '---',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: state.posts.length + 1,
				message: state.newMessageText,
				likeCount: 0,
			};

			return {
				...state,
				posts: [...state.posts, newPost],
				newMessageText: '',
			};
		}

		case ADD_NEW_MESSAGE_TEXT: {
			return {
				...state,
				newMessageText: action.text,
			};
		}

		default:
			return state;
	}
};

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addNewMessageActionCreator = text => {
	return { type: ADD_NEW_MESSAGE_TEXT, text };
};
