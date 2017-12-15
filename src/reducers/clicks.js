import {
  CLICKED_COURSE_ID
} from '../actions/clicks'

export default(state = [], action) => {
  switch (action.type) {
    case CLICKED_COURSE_ID:
      return action.payload;
    default:
      return state
  }
}
