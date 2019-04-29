import React from 'react';
import DialogForm from './DialogForm';
import { connect } from 'react-redux';
import { addNewDialogActionCreator, addDialogActionCreator } from '../../redux/reducers/dialogReducer';

const mapDispatchToProps = dispatch => {
	return {
		addPostCallback: () => {
			const action = addDialogActionCreator();
			dispatch(action);
		},
		addNewMessageCallback: text => {
			const action = addNewDialogActionCreator(text);
			dispatch(action);
		},
	};
};

const DialogFormContainer = connect(null, mapDispatchToProps)(DialogForm);

export default DialogFormContainer;
