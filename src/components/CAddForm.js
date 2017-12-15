import React, { Component } from 'react';
import {
  Field,
  reduxForm
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNewCourse } from '../actions/courses';

class CAddForm extends Component {

  addNewCourse = (values) => {
    this.props.addNewCourse(values);
    this.props.handleAddToggle();
  }

  render () {

    const { handleSubmit } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit(this.addNewCourse)}>
          <div>
            <label htmlFor="name">Title</label>
            <Field name="name" component="input" type="text" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

CAddForm = reduxForm({
  form: 'course_add_form'
})(CAddForm)

function mapDispatchToProps(dispatch) {
  return {
    addNewCourse: bindActionCreators(addNewCourse, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CAddForm)
