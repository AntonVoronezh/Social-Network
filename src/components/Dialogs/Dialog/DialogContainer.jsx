import React from 'react';
import Dialog from './Dialog';

const DialogContainer = props => {
	const { dialogs } = props;
	
	const dialogsData = dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);

	return <div>{dialogsData}</div>;
};

export default DialogContainer;
