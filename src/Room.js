import React, { Component } from 'react';

import { ZOOM_LIST } from './config';

class Room extends Component {
  state = {
    isMenuOpen: false,
  }

  render() {
    return (
      <div className="app-room">
        <div className="app-room-list">
          {ZOOM_LIST.map((level, index) => (
            <div key={index} className="app-room-level">
              { level.map(item => (
                <div key={item.id} className="app-room-item">
                  <span>{item.id}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Room;
