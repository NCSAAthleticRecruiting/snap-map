import React, {PropTypes, Component} from 'react';
export default class VideoTable extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const tableStyle = {
    }
   return (
      <div style={tableStyle}>
        //  videos will be rendered in here....somehow
      </div>
   );
 }
}
