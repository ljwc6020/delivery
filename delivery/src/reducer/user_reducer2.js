import { JOIN_SUCCESS, JOIN_FAILURE } from "../actions/actions";
// 액션 상태를 받아옴
const initialState = {
  //기본 상태는 공백
  user: null,
  error: null,
};
const user_reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_SUCCESS:
      console.log("Join success. New state:", state);
      //지금은 따로 관리해줄 상태가 없어서, 콘솔로 리덕스가
      //갱신 됬는지만 콘솔로 확인한다.
      return {
        ...state,
        user: action.payload,
        error: null,
        //가입 성공시 error값은 null로 user는 action에 담긴
        //payload값에서 받아온다.
      };
    case JOIN_FAILURE:
      console.log("Join failure. New state:", state);
      return {
        ...state,
        user: null,
        error: action.payload,
        //가입 실패시 user값은 null로 error는 action에 담긴
        //payload값에서 받아온다.
      };
    default:
      return state;
  }
};

export default user_reducer2;
