import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.sidebar}>
			<ul>
				<li><a href="/profile" className={classes.item}>Profile</a></li>
				<li><a href="/dialogs" className={`${classes.item} ${classes.active}`}>Messages</a></li>
				<li><a href="/news" className={classes.item}>News</a></li>
				<li><a href="/music" className={classes.item}>Music</a></li>
				<li><a href="/settings" className={classes.item}>Settings</a></li>
			</ul>
		</div>
	);
};

export default Navbar;
