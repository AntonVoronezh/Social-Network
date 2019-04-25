import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost } from './redux/state';

export default state => {
	const application = (
		<BrowserRouter>
			<App state={state} addPost={addPost} />
		</BrowserRouter>
	);

	ReactDOM.render(application, document.getElementById('root'));
};
