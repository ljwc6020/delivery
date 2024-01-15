// 회원가입 실패, 성공 액션들을 따로 정의
export const JOIN_SUCCESS = "JOIN_SUCCESS";
export const JOIN_FAILURE = "JOIN_FAILURE";

export const joinSuccess = (userData) => ({
  type: JOIN_SUCCESS,
  payload: userData,
});

export const joinFailure = (error) => ({
  type: JOIN_FAILURE,
  payload: error,
});

export const loginSuccess = (userData) => ({
  type: "LOGIN_SUCCESS",
  payload: userData,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
