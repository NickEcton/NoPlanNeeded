import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const GoogleMapExample = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 37.792132, lng: -122.408547 }}
    defaultZoom={15}
  >
  </GoogleMap>
));
class Map extends React.Component {

  render() {

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