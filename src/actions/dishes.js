import axios from 'axios';

const URL = 'http://localhost:8000';

export const GET_DISHES_PENDING = 'GET_DISHES_PENDING';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const ADD_NEW_DISH_PENDING = 'ADD_NEW_DISH_PENDING';
export const ADD_NEW_DISH_SUCCESS = 'ADD_NEW_DISH_SUCCESS';

export const getDishes = () => {
  return async (dispatch) => {
    dispatch({ type: GET_DISHES_PENDING });
     let dishes = await axios.get(`${URL}/dishes`);
    dispatch({
      type: GET_DISHES_SUCCESS,
      payload: dishes
    })
  }
}

export const addNewDish = (dish) => {
  return async (dispatch) => {
    dispatch({ type: ADD_NEW_DISH_PENDING });
      let newDish = await axios.post(`${URL}/dishes/add`, dish)
    dispatch({
      type: ADD_NEW_DISH_SUCCESS,
      payload: newDish
    })
  }
}
