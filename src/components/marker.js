const K_SIZE = 40;

const markerStyle = {
// initially any map object has left top corner at lat lng coordinates
// it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #ff6900',
  borderRadius: K_SIZE,
  backgroundColor: '#ff6900',
  textAlign: 'center',
  color: '#000',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer',
  display: 'none'
};

const markerStyleHover = {
  ...markerStyle,
  border: '5px solid #ff6900',
  color: '#000',
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
    const style = this.props.$hover ? markerStyleHover : markerStyle;

     return (
       <div style={markerStyleHover}>
        <div style={style}>
          {this.props.text}!
        </div>
        <div>
          {this.props.text}
        </div>
      </div>
     );
 }
}
