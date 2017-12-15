import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getCourses
} from './actions/courses';

import {
  getDishes
} from './actions/dishes';

import Dashboard from './components/Dashboard';

class App extends Component {

  componentDidMount() {
    this.props.getCourses();
    this.props.getDishes();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCourses: bindActionCreators(getCourses, dispatch),
    getDishes: bindActionCreators(getDishes, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
