import React, {Component} from 'react';
import GoogleMap from 'google-map-react';

export default class Map extends Component {
  static defaultProps = {
    center: {lat: 41.881832, lng: -87.623177},
    zoom: 5,
  };

  render() {
      return (
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyDp6OGS8beEflySUYkEFLQ1iT2_QwaVl8I'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChange={this.props.onChange}
        onClick={this.props.onClick}>
        {
          this.props.markers
        }
      </GoogleMap>
    );
  }
}
