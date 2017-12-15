import React, { Component } from 'react';
import { connect } from 'react-redux';

import Course from './Course'

class CourseList extends Component {
  render () {
    let mapCourses = this.props.courses
    .sort((a, b) => a.id - b.id)
    .map(c => <Course key={c.id} course={c} history={this.props.history}/>)

    return (
      <div id='lists'>
        {mapCourses}
      </div>
    )
  }
}

function mapStateToProps(store, props) {
  return {
    courses: store.courses
  }
}

export default connect(mapStateToProps, null)(CourseList)
