import React from 'react';
import classes from './AllMessages.module.css';
import Message from './OneMessage/Message';

const AllMessages = props => {
	const messagesData = props.messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

	return <div className={classes.messages}>{messagesData}</div>;
};

export default AllMessages;
