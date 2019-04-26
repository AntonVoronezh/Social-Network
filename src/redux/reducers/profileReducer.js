const ADD_POST = 'ADD_POST';
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';

const profileReducer = (state, action) => {
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

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addNewMessageActionCreator = text => {
	return { type: ADD_NEW_MESSAGE_TEXT, text };
};

// if (action.type === ADD_POST) {
//     const newPost = {
//         id: 5,
//         message: this._state.profilePage.newMessageText,
//         likeCount: 0,
//     };

//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newMessageText = '';
//     this._reRender(this._state);
// } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
//     this._state.profilePage.newMessageText = action.text;
//     this._reRender(this._state);
// } else
