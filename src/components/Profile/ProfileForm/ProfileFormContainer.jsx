// import React from 'react';
import ProfileForm from './ProfileForm';
import { connect } from 'react-redux';
import { addNewMessageActionCreator, addPostActionCreator } from '../../../redux/reducers/profileReducer';

const mapStateToProps = state => {
	return {
		newMessageText: state.profilePage.newMessageText
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addPostCallback: () => {
			const action = addPostActionCreator();
			dispatch(action);
		},
		addNewMessageTextCallback: text => {
			const action = addNewMessageActionCreator(text);
			dispatch(action);
		},
	};
};

const ProfileFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileForm);

export default ProfileFormContainer;
