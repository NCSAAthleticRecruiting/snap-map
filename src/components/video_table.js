import React, {PropTypes, Component} from 'react';
import ThumbnailRenderer from './thumbnail_renderer';
export default class VideoTable extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const tableStyle = {
      display: 'block'
    }
   return (
      <div style={tableStyle}>
        <ThumbnailRenderer athlete_data={this.props.athlete_data} />
      </div>
   );
 }
}
