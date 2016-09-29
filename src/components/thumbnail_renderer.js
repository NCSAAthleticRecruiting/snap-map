import React, {PropTypes, Component} from 'react';
export default class ThumbnailRenderer extends Component {
  static propTypes = {
    list: PropTypes.object
  };

  render() {
   return (
     <ul>
       {this.props.athlete_data.map(function(athlete){
          return <li key={"athlete_video_id-" + athlete["id"]}>
            <span>
            <img src={athlete["thumbnail_url"]} alt={athlete["name"]} />
            </span>
          </li>;
       })}
     </ul>
   );
 }
}
