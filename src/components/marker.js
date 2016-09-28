import React, {PropTypes, Component} from 'react';
export default class Marker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const markerStyle = {
      position: 'absolute',
      width: 10,
      height: 10,
      left: -5,
      top: -5,
      border: '1px solid #f44336',
      borderRadius: 50,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
    }
   return (
      <div style={markerStyle}>
         {this.props.text}
      </div>
   );
 }
}
