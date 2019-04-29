import React from './node_modules/react';
import Message from './DialogForm'

const MessageContainer = props => {
	const { messages } = props;
	
	const messagesData = messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

	return <div>{messagesData}</div>;
};

export default MessageContainer;
