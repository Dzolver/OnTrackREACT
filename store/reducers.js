import { combineReducers } from "redux";

//combining all possible functions from different routes into one reducing function
export const makeRootReducer = () => {
  return combineReducers({});
}

export default makeRootReducer;
