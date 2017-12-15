import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CAddForm from './CAddForm';
import CEditForm from './CEditForm';
import CDeleteForm from './CDeleteForm';

class CForm extends Component {

  state = {
    toggleAdd: false,
    toggleEdit: false,
    toggleDelete: false
  }

  handleAddToggle = () => {
    this.props.history.push(`/dashboard/`);
    this.setState({
      toggleAdd: !this.state.toggleAdd,
      toggleEdit: false,
      toggleDelete: false
     })
  }

  handleEditToggle = () => {
    this.props.history.push(`/dashboard/`);
    this.setState({
      toggleEdit: !this.state.toggleEdit,
      toggleAdd: false,
      toggleDelete: false
    })
  }

  handleDeleteToggle = () => {
    this.props.history.push(`/dashboard/`);
    this.setState({
      toggleDelete: !this.state.toggleDelete,
      toggleAdd: false,
      toggleEdit: false
    })
  }

  handleEditSelect = (e) => {
    this.setState({ toggleEdit: false })
    this.props.history.push(`/dashboard/edit/course/${e.target.value}`)
  }

  handleDeleteSelect = (e) => {
    this.setState({ toggleDelete: false })
    this.props.history.push(`/dashboard/delete/course/${e.target.value}`)
  }

  // shouldComponentUpdate() {
  //   return  || this.props.location.pathname.includes('/dashboard/delete')
  // }

  render () {

    let addButton = !this.state.toggleAdd
                  ? <Button outline color='success' onClick={this.handleAddToggle}>Add a new course</Button>
                  : <Button color='success' onClick={this.handleAddToggle}>Add a new course</Button>

    let editButton = !this.state.toggleEdit
                  ? <Button outline color='primary' onClick={this.handleEditToggle}>Edit a course</Button>
                  : <Button color='primary' onClick={this.handleEditToggle}>Edit a course</Button>;

    let deleteButton = !this.state.toggleDelete
                  ? <Button outline color='danger' onClick={this.handleDeleteToggle}>Delete a course</Button>
                  : <Button color='danger' onClick={this.handleDeleteToggle}>Delete a course</Button>;

    let addFormDisplay = this.state.toggleAdd ? <CAddForm handleAddToggle={this.handleAddToggle}/> : null

    let courseDropdown = this.props.courses.map(c => <option
                                                        key={c.id}
                                                        value={c.id}
                                                        >{c.name}</option>
                                                    )

    let editDropdown = this.state.toggleEdit
                  ? <div className="form-group">
                      <select
                        className="custom-select"
                        onChange={this.handleEditSelect}
                        >
                        <option>Pick a course to edit</option>
                        {courseDropdown}
                      </select>
                    </div>
                  : null

    let deleteDropdown = this.state.toggleDelete
                  ? <div className="form-group">
                      <select
                        className="custom-select"
                        onChange={this.handleDeleteSelect}
                        >
                        <option>Pick a course to delete</option>
                        {courseDropdown}
                      </select>
                    </div>
                  : null

    let displayEForm = this.props.location.pathname.includes('/dashboard/edit')
                  ? <CEditForm location={this.props.location} history={this.props.history}/>
                : null;

    let displayDForm = this.props.location.pathname.includes('/dashboard/delete')
                  ? <CDeleteForm location={this.props.location} history={this.props.history}/>
                : null;

    return (
      <div>
        <div>
          <div id='btn-ctn'>
            {addButton}
            {editButton}
            {deleteButton}
          </div>
        </div>
        <div>
          <div id='dropdown-ctn'>
            {editDropdown}
            {deleteDropdown}
          </div>
        </div>
        <div>
          <div id='form-ctn'>
            {addFormDisplay}
            {displayEForm}
            {displayDForm}
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(store, props) {
  console.log('CFORM', props);
  return {
    courses: store.courses
  }
}

export default withRouter(connect(mapStateToProps, null)(CForm))
