import {
  GET_DISHES_PENDING,
  GET_DISHES_SUCCESS,
  ADD_NEW_DISH_PENDING,
  ADD_NEW_DISH_SUCCESS
} from '../actions/dishes';

export default(state = [], action) => {
  switch(action.type) {
    case GET_DISHES_PENDING:
      return state;
    case GET_DISHES_SUCCESS:
      return [...action.payload.data];
    case ADD_NEW_DISH_PENDING:
      return state;
    case ADD_NEW_DISH_SUCCESS:
      return [...state, ...action.payload.data];
    default:
      return state
  }
}
