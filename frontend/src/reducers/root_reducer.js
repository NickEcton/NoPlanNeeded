import { combineReducers } from 'redux';
import sessionReducer from './session_reducer.js';
import entitiesReducer from './entities_reducer.js';
import sessionErrorsReducer from './session_errors_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: sessionErrorsReducer
});

export default rootReducer;