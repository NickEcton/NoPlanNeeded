import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import eventReducer from '../event_reducer';
import pastEventsReducer from './past_events_reducer';

export default combineReducers({
    users: userReducer,
    events: eventReducer,
    pastEvents: pastEventsReducer
})