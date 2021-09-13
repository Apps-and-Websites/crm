import { combineReducers } from "redux";

import { reducer } from "./reducer";
import { websiteReducer } from "./websiteReducer";
import { appReducer } from "./appReducer";
import { logoReducer } from "./logoReducer";
import { graphicReducer } from "./graphicReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  reducer,
  websiteReducer,
  appReducer,
  logoReducer,
  graphicReducer,
  userReducer,
});
export default rootReducer;
