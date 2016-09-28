const K_SIZE = 40;

const greatPlaceStyle = {
// initially any map object has left top corner at lat lng coordinates
// it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer',
  display: 'none'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #3f51b5',
  color: '#f44336',
  display: 'block'
};

import React, {PropTypes, Component} from 'react';

export default class Marker extends Component {
  static propTypes = {
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

     return (
       <div style={greatPlaceStyleHover}>
        <div style={style}>
           video popup without proper styles
        </div>
        <div>
          permanent placeholder without styles
        </div>
      </div>
     );
 }
}
