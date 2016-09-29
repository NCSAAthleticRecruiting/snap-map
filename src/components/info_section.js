import React, {PropTypes, Component} from 'react';
import ClientInfoRenderer from './client_info_renderer';
export default class InfoSection extends Component {

  render() {
   return (
      <div>
        <ClientInfoRenderer athlete_data={this.props.athlete_data} />
      </div>
   );
 }
}
