import { RECEIVE_CURRENT_USER } from '../util/session_api_util';
import merge  from 'lodash/merge'; 
  
  const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        let newState = merge({}, state, {[action.payload.id] : action.payload})
        return newState;
      default:
        return state;
    }
  };
  
  export default userReducer;