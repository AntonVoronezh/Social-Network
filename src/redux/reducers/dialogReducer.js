const ADD_NEW_DIALOG_TEXT = 'ADD_NEW_DIALOG_TEXT';
const ADD_DIALOG = 'ADD_DIALOG';

const dialogReducer = (state, action) => {
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
