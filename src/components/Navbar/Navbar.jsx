import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.sidebar}>
			<ul>
				<li className={classes.item}>
					<NavLink to="/profile">Profile</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/dialogs">Messages</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/news">News</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/music">Music</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/settings">Settings</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
