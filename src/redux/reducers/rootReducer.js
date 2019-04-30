import { combineReducers } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
// import uswersReducer from './uswersReducer';

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	// uswersPage: uswersReducer,
});

export default rootReducer;
