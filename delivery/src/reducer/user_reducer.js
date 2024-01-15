const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login success. New state:", state);
      // 콘솔 로그로 제대로 리덕스 상태가 변화했는지 확인
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      console.log("Login failure. New state:", state);
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
