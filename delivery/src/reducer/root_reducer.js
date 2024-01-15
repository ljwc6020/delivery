import { combineReducers } from "redux";
// combineReducers 사용으로 하나의 리듀서로 만듬
import authReducer from "./user_reducer";
import user_reducer2 from "./user_reducer2";

const rootReducer = combineReducers({
  auth: authReducer,
  //로그인시 사용하는 리듀서
  user: user_reducer2,
  //회원가입시 사용하는 리듀서
});

export default rootReducer;
