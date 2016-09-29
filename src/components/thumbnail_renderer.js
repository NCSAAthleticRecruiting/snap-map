import React, {PropTypes, Component} from 'react';
export default class ThumbnailRenderer extends Component {
  static propTypes = {
    list: PropTypes.object
  };

  render() {
    const thumbnailStyle = {
    }
   return (
     <ul>
       {this.props.athlete_data.map(function(athlete){
          return <li id={"athlete_video_id-" + athlete["id"]}>
            <img src={athlete["thumbnail_url"]} alt={athlete["name"]} />
          </li>;
       })}
     </ul>
   );
 }
}
