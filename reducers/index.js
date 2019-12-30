import { combineReducers } from 'redux';
import suggestions from './rootReducer';


export default combineReducers({
    suggestions: suggestions,
    
});