import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// import Header from './Header';
import Sidebar from './Sidebar';
import Default from './Default';
import Room from './Room';


class Home extends Component {
  state = {
    isMenuOpen: false,
  }

  render() {
    const { match } = this.props;
    
    return (
      <div className="app">
        <div className="app-body">
          <Sidebar />

          <div className="app-main">
            <Switch>
              <Route path="/zoom/overview" component={Room} />
              <Route exact path={match.url} component={Default} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
