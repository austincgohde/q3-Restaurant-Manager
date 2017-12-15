import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import courses from './courses';
import dishes from './dishes';
import clicks from './clicks';

 const rootReducer = combineReducers({
   form : formReducer,
   courses,
   dishes,
   clicks
 })

 export default rootReducer;
