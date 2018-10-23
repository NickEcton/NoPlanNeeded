import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer/session_reducer.js';
import entitiesReducer from './entities_reducer/entities_reducer.js';
import errorsReducer from './errors_reducer/errors_reducer.js';


const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;