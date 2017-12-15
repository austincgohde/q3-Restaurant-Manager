export const CLICKED_COURSE_ID = 'CLICKED_COURSE_ID';

export const clickedCourse = (id) => {
  return (dispatch) => {
    let clickedId = { id }
    dispatch({
      type: CLICKED_COURSE_ID,
      payload: clickedId
    })
  }
}
