import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends React.Component {

  render() {
    // debugger
    const lat = this.props.location[0];
    const lng = this.props.location[1];

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ 
          lat, 
          lng
        }}
        defaultZoom={20}
      >
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={ 
            <div style={{ 
              height: `300px`, 
              width: '300px' 
            }} /> 
          }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>

    );
  }
}

export default Map;