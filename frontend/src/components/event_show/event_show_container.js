import { connect } from 'react-redux';
import EventShow from './event_show';
import { pickRandomEvent } from '../../actions/event_actions';
import { createPastEvents } from '../../actions/past_events_actions';
// import _ from 'lodash';
//preferences {random: true, ... }
const filterByUser = (preferenceObj, currentUserId) => {
    //find the preference associated with the user
    let preferenceArray = Object.values(preferenceObj);
    let userPreferences = {};
    for(let i = 0; i < preferenceArray.length; i++){
        let preference = preferenceArray[i];
        if(preference.userId === currentUserId){
            userPreferences = preference;
        }
    }
    //no preferences 
    if (preferenceArray.length === 0){
        return [];
    } else {
        // let userPreferences = preferenceObj[currentUserId];
        let categories = [];
        let keyPreferences = Object.keys(userPreferences); 
        // debugger;
        keyPreferences.forEach((preference) => {
            if (userPreferences[preference] === true) {
                categories.push(preference);
            }
        })
        return categories;
    }
   
}


const mapStateToProps = state => {
    return {
        event: state.entities.events.event,
        categories: filterByUser(state.entities.preferences, state.session.id)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: (pojo) => dispatch(pickRandomEvent(pojo)),
        createPastEvents: (pojo) => dispatch(createPastEvents(pojo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);