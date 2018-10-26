import { RECEIVE_CURRENT_USER } from '../../util/session_api_util';
import merge  from 'lodash/merge'; 

//remove session tokens from the payload
const userFilter = (user) => {
  return { email: user.email, name: user.name, id: user.id}
}

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let filteredUser = userFilter(action.payload);
      let newState = merge({}, state, {[filteredUser.id] : filteredUser})
      // let newState = merge({}, state, {[action.payload.id] : action.payload})
      return newState;
    default:
      return state;
  }
};
  
  export default userReducer;