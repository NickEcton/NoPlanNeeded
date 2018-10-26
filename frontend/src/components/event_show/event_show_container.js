import { connect } from 'react-redux';
import EventShow from './event_show';
import {
    receiveEventful,
    receiveGooglePlaces,
    receiveEventfulImage,
    receiveGoogleImage
} from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        event: state.entities.events.event
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveEventful: () => dispatch(receiveEventful()),
        receiveEventfulImage: () => dispatch(receiveEventfulImage()),
        receiveGooglePlaces: (type, location) => dispatch(receiveGooglePlaces(type, location)),
        receiveGoogleImage: (id) => dispatch(receiveGoogleImage(id)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);