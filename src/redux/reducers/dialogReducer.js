const ADD_NEW_DIALOG_TEXT = 'ADD_NEW_DIALOG_TEXT';
const ADD_DIALOG = 'ADD_DIALOG';

const initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DIALOG:
			const newDialog = {
				id: 4,
				text: state.newDialogText,
			};

			state.messages.push(newDialog);
			state.newDialogText = '';
			return state;

		case ADD_NEW_DIALOG_TEXT:
			state.newDialogText = action.text;
			return state;

		default:
			return state;
	}
};

export default dialogReducer;

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const addNewDialogActionCreator = text => ({ type: ADD_NEW_DIALOG_TEXT, text });
