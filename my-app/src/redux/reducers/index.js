import { combineReducers } from "redux";
import languageReducer from "../language/reducer";
import themeReducer from "../theme/reducer";

const allReducers = combineReducers({
  themeReducer,
  languageReducer,
});
export default allReducers;
