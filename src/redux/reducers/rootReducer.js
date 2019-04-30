import { combineReducers } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	uswersPage: usersReducer,
});

export default rootReducer;
