import React from 'react';
import AllDialogs from './AllDialogs';
import { connect } from 'react-redux';

// const DialogContainer = props => {
// 	const { dialogs } = props;

// 	const dialogsData = dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);

// 	return <div>{dialogsData}</div>;
// };

const mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
	};
};

const DialogContainer = connect(mapStateToProps)(AllDialogs);

export default DialogContainer;
