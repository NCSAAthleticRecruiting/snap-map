import React, {Component} from 'react';
import Marker from './marker'
import GoogleMap from 'google-map-react';

var chicago = {lat: 41.881832, lng: -87.623177}
var philadelphia = {lat: 39.9526, lng: -75.1652}

export default class Map extends Component {
  static defaultProps = {
    center: chicago,
    zoom: 9,
  };

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyDp6OGS8beEflySUYkEFLQ1iT2_QwaVl8I'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChange={this.props.onChange}
        onClick={this.props.onClick}>
        <Marker lat={41.881832} lng={-87.623177} text={"Chicago"} />
        <Marker lat={39.9526} lng={-75.1652} text={"Philadelphia"} />
      </GoogleMap>
    );
  }
}
