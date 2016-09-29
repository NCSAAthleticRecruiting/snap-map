const K_SIZE = 40;

const greatPlaceStyle = {
// initially any map object has left top corner at lat lng coordinates
// it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,
  textAlign: 'center',
  color: '#3a3f4f',
  fontSize: 16,
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'none',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  background: '#ff6900',
  left: '50%',
  top: '50%',
  margin: '-20px 0 0 -20px'

};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  color: '#3a3f4f',
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
           Video
        </div>
        <div>
          Permanent
        </div>
      </div>
     );
 }
}
