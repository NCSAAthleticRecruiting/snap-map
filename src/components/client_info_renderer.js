import React, {PropTypes, Component} from 'react';
export default class ClientInfoRenderer extends Component {
  static propTypes = {
    list: PropTypes.object
  };

  render() {
   return (
     <ul>
       {this.props.athlete_data.map(function(athlete){
          return <li key={"athlete_info_id-" + athlete["id"]} >
            <span><img src={athlete["photo"]} alt={athlete["name"]} /></span>
            <b>{athlete["name"]}</b>
          </li>;
       })}
     </ul>
   );
 }
}
