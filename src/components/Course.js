import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickedCourse } from '../actions/clicks';

class Course extends Component {

  handleClick = () => {
    this.props.clickedCourse(this.props.course.id);
    let divChanges = document.getElementById(this.props.course.name).style;
    divChanges.backgroundColor = '#578dd2';
  }

  render () {

    return (
      <div
        id={this.props.course.name}
        onClick={this.handleClick}
        >
        <h5>{this.props.course.name}</h5>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clickedCourse: bindActionCreators(clickedCourse, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Course)
