import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import { addPost, addNewMessageText, subscribe } from './redux/state';

const reRender = state => {
	const application = (
		<BrowserRouter>
			<App state={state} addPost={addPost} addNewMessageText={addNewMessageText} />
		</BrowserRouter>
	);

	ReactDOM.render(application, document.getElementById('root'));
};

reRender(state);
subscribe(reRender);

// ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
