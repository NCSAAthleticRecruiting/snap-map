import React, {Component} from 'react';
import Map from './map';
import VideoTable from './video_table';
import InfoSection from './info_section';

export default class Container extends Component {
  render() {
    return (
      <div>
        <div id='map'>
          <Map markers={this.props.markers}/>
        </div>
        <div id='vtable'>
          <VideoTable athlete_data={this.props.athlete_data.chicago} />
        </div>
        <div id='info_section'>
          <InfoSection athlete_data={this.props.athlete_data.chicago} />
        </div>
      </div>
    );
  }
}
