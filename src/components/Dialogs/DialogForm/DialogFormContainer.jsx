// import React from 'react';
import DialogForm from './DialogForm';
import { connect } from 'react-redux';
import { addNewDialogActionCreator, addDialogActionCreator } from '../../../redux/reducers/dialogReducer';

const mapStateToProps = state => {
	return {
		newDialogText: state.dialogsPage.newDialogText
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addDialogCallback: () => {
			const action = addDialogActionCreator();
			dispatch(action);
		},
		addNewDialogTextCallback: text => {
			const action = addNewDialogActionCreator(text);
			dispatch(action);
		},
	};
};

const DialogFormContainer = connect(mapStateToProps, mapDispatchToProps)(DialogForm);

export default DialogFormContainer;
