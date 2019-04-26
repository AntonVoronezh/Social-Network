import { combineReducers } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
});

export default rootReducer;
