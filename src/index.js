import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './main.css';
import Home from './Home';
import Room from './Room';
import registerServiceWorker from './registerServiceWorker';

const RouterConfig = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  </Router>
);

ReactDOM.render(<RouterConfig />, document.getElementById('root'));
registerServiceWorker();
