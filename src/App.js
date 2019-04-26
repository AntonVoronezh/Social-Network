import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = props => {
	const { profilePage, dialogsPage } = props.state;
	const { dispatch } = props;

	return (
		<div className="wrapper">
			<Header />
			<Navbar />
			<div className="content">
				<Route path="/profile" render={() => <Profile state={profilePage} dispatch={dispatch} />} />
				<Route path="/dialogs" render={() => <Dialogs state={dialogsPage} dispatch={dispatch}/>} />
				<Route path="/music" component={Music} />
				<Route path="/news" component={News} />
				<Route path="/settings" component={Settings} />
			</div>
		</div>
	);
};

export default App;
