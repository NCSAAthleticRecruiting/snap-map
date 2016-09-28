import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map';
import VideoTable from './components/video_table';
import InfoSection from './components/info_section';
import '../public/css/index.css';

ReactDOM.render(
  <Map />,
  document.getElementById('map')
);

ReactDOM.render(
  <VideoTable />,
  document.getElementById('vtable')
);

ReactDOM.render(
  <InfoSection />,
  document.getElementById('info_section')
);
