import React, {Component} from 'react';
export default class Thumbnail extends Component {

  render() {
   return (
     <li key={"athlete_video_id-" + this.props.athlete["id"]} >
       <img src={this.props.athlete["thumbnail_url"]} alt={this.props.athlete["name"]} />
     </li>
   );
 }
}
