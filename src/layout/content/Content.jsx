import React from 'react';

import Sidebar from '../sidebar/Sidebar';
import HotelView from '../hotelView/HotelView';
import './Content.scss';

function Content() {
  return (
    <div className="content">
      <Sidebar />
      <HotelView />
    </div>
  );
}

export default Content;
