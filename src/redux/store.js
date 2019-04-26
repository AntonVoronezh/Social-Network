const ADD_POST = 'ADD_POST';
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';
const ADD_NEW_DIALOG_TEXT = 'ADD_NEW_DIALOG_TEXT';
const ADD_DIALOG = 'ADD_DIALOG';

const store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'aaaaa aaaaaa', likeCount: 11 },
				{ id: 2, message: 'bbbbbb bbbbb', likeCount: 16 },
			],
			newMessageText: '---',
		},
		dialogsPage: {
			messages: [
				{ id: 1, text: '111 11111 11111 1111111' },
				{ id: 2, text: '222 2222 22222 22222' },
				{ id: 3, text: '33 33 333333 3333' },
			],
			newDialogText: '+++',
			dialogs: [
				{ id: 1, name: '1111111' },
				{ id: 2, name: '2222222' },
				{ id: 3, name: '333333' },
				{ id: 4, name: '44444444' },
				{ id: 5, name: '5555555' },
				{ id: 6, name: '6666666' },
			],
		},
	},

	_reRender() {
		console.log('state reRender');
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._reRender = observer;
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			const newPost = {
				id: 5,
				message: this._state.profilePage.newMessageText,
				likeCount: 0,
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newMessageText = '';
			this._reRender(this._state);
		} else if (action.type === ADD_NEW_MESSAGE_TEXT) {
			this._state.profilePage.newMessageText = action.text;
			this._reRender(this._state);
		} else if (action.type === ADD_DIALOG) {
			const newDialog = {
				id: 4,
				text: this._state.dialogsPage.newDialogText,
			};

			this._state.dialogsPage.messages.push(newDialog);
			this._state.dialogsPage.newDialogText = '';
			this._reRender(this._state);
		} else if (action.type === ADD_NEW_DIALOG_TEXT) {
			this._state.dialogsPage.newDialogText = action.text;
			this._reRender(this._state);
		} else {
			console.log('I don`t now ', action.type);
		}
	},

	// addPost() {
	// 	const newPost = {
	// 		id: 5,
	// 		message: this._state.profilePage.newMessageText,
	// 		likeCount: 0,
	// 	};

	// 	this._state.profilePage.posts.push(newPost);
	// 	this._state.profilePage.newMessageText = '';
	// 	this._reRender(this._state);
	// },

	// addNewMessageText(text) {
	// 	this._state.profilePage.newMessageText = text;
	// 	this._reRender(this._state);
	// },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addNewMessageActionCreator = text => ({ type: ADD_NEW_MESSAGE_TEXT, text });

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const addNewDialogActionCreator = text => ({ type: ADD_NEW_DIALOG_TEXT, text });

window.store = store;

export default store;
