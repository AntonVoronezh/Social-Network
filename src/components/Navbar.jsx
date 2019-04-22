import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.sidebar}>
			<ul>
				<li><a className={classes.item}>Profile</a></li>
				<li><a className={`${classes.item} ${classes.active}`}>Messages</a></li>
				<li><a className={classes.item}>News</a></li>
				<li><a className={classes.item}>Music</a></li>
				<li><a className={classes.item}>Settings</a></li>
			</ul>
		</div>
	);
};

export default Navbar;
