import React, {PropTypes, Component} from 'react';
import ClientInfoRenderer from './client_info_renderer';
export default class InfoSection extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const infoStyle = {
    }
   return (
      <div style={infoStyle}>
        <ClientInfoRenderer athlete_data={this.props.athlete_data} />
      </div>
   );
 }
}
