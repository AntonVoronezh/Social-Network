import React from 'react';
import Message from './AllMessages'

const MessageContainer = props => {
	const { messages } = props;
	
	const messagesData = messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

	return <div>{messagesData}</div>;
};

export default MessageContainer;
