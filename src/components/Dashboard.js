import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Courses from './Courses';
import Dishes from './Dishes';

class Dashboard extends Component {

  render () {

    return (
      <div id='dash-ctn'>
        <Router>
          <Switch>
            <Route path={`${this.props.match.path}/course/:id`} component={Dishes}/>
            <Route path={`${this.props.match.path}/`} component={Courses}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Dashboard
