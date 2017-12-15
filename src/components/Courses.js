import React, { Component } from 'react';

import CourseList from './CourseList';
import CForm from './CForm';

class Courses extends Component {
  render () {
    return (
      <div id='crs-dash'>
        <CourseList />
        <CForm />
      </div>
    )
  }
}

export default Courses
