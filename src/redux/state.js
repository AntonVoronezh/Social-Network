const state = {
	profilePage: {
		posts: [{ id: 1, message: 'aaaaa aaaaaa', likeCount: 11 }, { id: 2, message: 'bbbbbb bbbbb', likeCount: 16 }],
		newMessageText: '---',
	},
	dialogsPage: {
		messages: [
			{ id: 1, text: '111 11111 11111 1111111' },
			{ id: 2, text: '222 2222 22222 22222' },
			{ id: 3, text: '33 33 333333 3333' },
		],
		dialogs: [
			{ id: 1, name: '1111111' },
			{ id: 2, name: '2222222' },
			{ id: 3, name: '333333' },
			{ id: 4, name: '44444444' },
			{ id: 5, name: '5555555' },
			{ id: 6, name: '6666666' },
		],
	},
};

window.state = state;

let reRender = () => console.log('state reRender');

export const addPost = () => {
	const newPost = {
		id: 5,
		message: state.profilePage.newMessageText,
		likeCount: 0,
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newMessageText = '';
	reRender(state);
};

export const addNewMessageText = text => {
	state.profilePage.newMessageText = text;
	reRender(state);
};

export const subscribe = observer => reRender = observer;

export default state;
