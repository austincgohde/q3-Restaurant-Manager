import {
  GET_COURSES_PENDING,
  GET_COURSES_SUCCESS,
  ADD_NEW_COURSE_PENDING,
  ADD_NEW_COURSE_SUCCESS,
  EDIT_COURSE_PENDING,
  EDIT_COURSE_SUCCESS,
  DELETE_COURSE_PENDING,
  DELETE_COURSE_SUCCESS
} from '../actions/courses';

export default(state = [], action) => {
  switch(action.type) {
    case GET_COURSES_PENDING:
      return state;
    case GET_COURSES_SUCCESS:
      return [...action.payload.data];
    case ADD_NEW_COURSE_PENDING:
      return state;
    case ADD_NEW_COURSE_SUCCESS:
      return [...state].concat(action.payload.data);
    case EDIT_COURSE_PENDING:
      return state;
    case EDIT_COURSE_SUCCESS:
      let filteredState = state.filter(i => i.id !== action.payload.data.id)
      return [...filteredState].concat(action.payload.data);
    case DELETE_COURSE_PENDING:
      return state;
    case DELETE_COURSE_SUCCESS:
      return [...action.payload.data]
    default:
      return state
  }
}
