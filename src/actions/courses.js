import axios from 'axios';

const URL = 'http://localhost:8000';

export const GET_COURSES_PENDING = 'GET_COURSES_PENDING';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const ADD_NEW_COURSE_PENDING = 'ADD_NEW_COURSE_PENDING';
export const ADD_NEW_COURSE_SUCCESS = 'ADD_NEW_COURSE_SUCCESS';
export const EDIT_COURSE_PENDING = 'EDIT_COURSE_PENDING';
export const EDIT_COURSE_SUCCESS = 'EDIT_COURSE_SUCCESS';
export const DELETE_COURSE_PENDING = 'DELETE_COURSE_PENDING';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';

export const getCourses = () => {
  return async (dispatch) => {
    dispatch({ type: GET_COURSES_PENDING });
     let courses = await axios.get(`${URL}/courses`);
    dispatch({
      type: GET_COURSES_SUCCESS,
      payload: courses
    })
  }
}

export const addNewCourse = (course) => {
  return async (dispatch) => {
    dispatch({ type: ADD_NEW_COURSE_PENDING });
      let newCourse = await axios.post(`${URL}/courses/add`, course)
    dispatch({
      type: ADD_NEW_COURSE_SUCCESS,
      payload: newCourse
    })
  }
}

export const editCourse = (course) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_COURSE_PENDING });
      let edittedCourse = await axios.put(`${URL}/courses/edit/${course.id}`, course)
    dispatch({
      type: EDIT_COURSE_SUCCESS,
      payload: edittedCourse
    })
  }
}

export const deleteCourse = (course) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_COURSE_PENDING });
      let courses = await axios.delete(`${URL}/courses/delete/${course.id}`)
    dispatch({
      type: DELETE_COURSE_SUCCESS,
      payload: courses
     })
  }
}
