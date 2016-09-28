import React, {PropTypes, Component} from 'react';
export default class InfoSection extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const infoStyle = {
    }
   return (
      <div style={infoStyle}>
        //  user photos will be rendered in here....somehow
      </div>
   );
 }
}
