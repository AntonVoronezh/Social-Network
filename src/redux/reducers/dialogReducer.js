const ADD_NEW_DIALOG_TEXT = 'ADD_NEW_DIALOG_TEXT';
const ADD_DIALOG = 'ADD_DIALOG';

const dialogReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 5,
				message: state.newMessageText,
				likeCount: 0,
			};

			state.posts.push(newPost);
			state.newMessageText = '';
			return state;

		case ADD_NEW_MESSAGE_TEXT:
			state.newMessageText = action.text;
			return state;

		default:
			return state;
	}
};

export default dialogReducer;

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const addNewDialogActionCreator = text => ({ type: ADD_NEW_DIALOG_TEXT, text });

