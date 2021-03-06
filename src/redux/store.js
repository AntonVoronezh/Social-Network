import profileReducer from './reducers/profileReducer';
import dialogReducer from './reducers/dialogReducer';

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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
		
		this._reRender(this._state);
	},
};

window.store = store;

export default store;
