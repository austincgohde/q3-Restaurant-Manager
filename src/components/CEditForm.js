import React, { Component } from 'react'
import {
  Field,
  reduxForm
} from 'redux-form';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editCourse } from '../actions/courses';

class CEditForm extends Component {

  editCourse = (values) => {
    this.props.editCourse(values);
    this.props.history.goBack();
  }

  render () {
    console.log('Why not now?');
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.editCourse)}>
          <div>
            <label>Course Name</label>
            <div>
              <Field
                name='name'
                component='input'
                type='text'
                placeholder='Course Name'
                />
            </div>
          </div>
          <Button color='primary'>Submit Edit</Button>
        </form>
      </div>
    )
  }
}

CEditForm = reduxForm({
  form: 'course_edit_form'
})(CEditForm)

function mapStateToProps(store, props) {
  console.log(props);
  return {
    initialValues: store.courses.find(c => props.location.pathname.endsWith(c.id))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editCourse: bindActionCreators(editCourse, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CEditForm)
