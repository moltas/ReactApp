import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import contentReducer from './contentReducer';

const rootReducer = combineReducers({
	content: contentReducer,
	routing: routerReducer,
});

export default rootReducer;
