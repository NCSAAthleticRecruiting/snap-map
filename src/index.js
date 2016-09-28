import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map';
import Marker, {K_SCALE_NORMAL} from './components/marker';
import '../public/css/index.css';

function _onClick(obj){ console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);}

ReactDOM.render(
  <Map onClick={_onClick} />,
  document.getElementById('root')
);
