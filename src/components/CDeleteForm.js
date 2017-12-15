import React, { Component } from 'react'
import {  reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteCourse } from '../actions/courses';

class CDeleteForm extends Component {

  deleteCourse = (initialValues) => {
    this.props.deleteCourse(initialValues);
    this.props.history.goBack();
  }

  render () {

    const { handleSubmit } = this.props;

    return (
      <div>
        <form>
          <div>
            <p>Are you sure you want to delete <strong>{this.props.initialValues.name}</strong>?</p>
          </div>
          <Button
            color='danger'
            onClick={handleSubmit(this.deleteCourse)}
            >Yes, I am sure</Button>
          <Button
            onClick={this.props.history.goBack}
            >NOOO!!!</Button>
        </form>
      </div>
    )
  }
}

CDeleteForm = reduxForm({
  form: 'course_delete_form'
})(CDeleteForm)

function mapStateToProps(store, props) {
  return {
    initialValues: store.courses.find(c => props.location.pathname.endsWith(c.id))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCourse: bindActionCreators(deleteCourse, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CDeleteForm)
