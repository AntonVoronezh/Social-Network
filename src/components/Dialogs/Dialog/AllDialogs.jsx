import React from 'react';
import classes from './AllDialogs.module.css';
import Dialog from './OneDialog/Dialog';

const AllDialogs = props => {
	const dialogsData = props.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);

	return <div className={`${classes.item}`}>{dialogsData}</div>;
};

export default AllDialogs;
