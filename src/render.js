import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, addNewMessageText } from './redux/state';

export default state => {
	const application = (
		<BrowserRouter>
			<App state={state} addPost={addPost} addNewMessageText={addNewMessageText} />
		</BrowserRouter>
	);

	ReactDOM.render(application, document.getElementById('root'));
};
