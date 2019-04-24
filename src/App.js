import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = props => {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Navbar />
				<div className="content">
					<Route path="/profile" component={() => <Profile posts={props.posts}/>} />
					<Route
						path="/dialogs"
						render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />}
					/>
					<Route path="/music" component={Music} />
					<Route path="/news" component={News} />
					<Route path="/settings" component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
