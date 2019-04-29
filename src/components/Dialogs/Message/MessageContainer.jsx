import React from 'react';
import { connect } from 'react-redux';
import AllMessages from './AllMessages'

// const MessageContainer = props => {
// 	const { messages } = props;
	
// 	const messagesData = messages.map(m => <Message text={m.text} id={m.id} key={m.id} />);

// 	return <div>{messagesData}</div>;
// };

const mapStateToProps = state => {
	return {
		messages: state.dialogsPage.messages,
	};
};

const MessageContainer = connect(mapStateToProps)(AllMessages);

export default MessageContainer;
