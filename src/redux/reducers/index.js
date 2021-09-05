import { combineReducers } from "redux";

import { reducer } from "./reducer";
import { projectReducer } from "./projectReducer";
import { logoReducer } from "./logoReducer";
import { graphicReducer } from "./graphicReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  reducer,
  projectReducer,
  logoReducer,
  graphicReducer,
  userReducer,
});
export default rootReducer;
