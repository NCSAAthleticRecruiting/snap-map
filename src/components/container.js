import React, {Component} from 'react';
import Map from './map';
import VideoTable from './video_table';
import InfoSection from './info_section';

var chicago = {lat: 41.881832, lng: -87.623177}
var philadelphia = {lat: 39.9526, lng: -75.1652}


export default class Container extends Component {
  render() {
    console.log(this.props.athlete_data)
    return (
      <div>
        <div id='map'>
          <Map markers={this.props.markers} athlete_data={this.props.athlete_data}/>
        </div>
        <div id='vtable'>
          <VideoTable athlete_data={this.props.athlete_data} />
        </div>
        <div id='info_section'>
          <InfoSection athlete_data={this.props.athlete_data} />
        </div>
      </div>
    );
  }
}
