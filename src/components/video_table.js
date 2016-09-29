import React, {PropTypes, Component} from 'react';
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
        <ul>
          {this.props.thumbnails}
        </ul>
      </div>
   );
 }
}
