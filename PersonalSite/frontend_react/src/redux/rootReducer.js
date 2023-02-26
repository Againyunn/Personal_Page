import * as types from "./actionTypes";

// 초기 상태 정의
const initialState = {
  userData: [],
  thisUser: false,
  activate: false,
};

const rootReducer = (state = initialState, action) => {
  // 레퍼런스 생성
  const userData = state.userData;
  const thisUser = state.thisUser;
  const activate = state.activate;

  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        userData: [
          ...state.userData,
          {
            user: action.user,
            gender: action.gender,
            age: action.age,
          },
        ],
      };

    case types.USER_LOGIN:
      return {
        ...state,
        thisUser: action.thisUser,
      };

    case types.USER_LOGOUT:
      return {
        ...state,
        thisUser: false,
      };

    case types.MENU_TOGGLE:
      return {
        ...state,
        activate: action.activate,
      };

    default:
      return state;
  }
};

export default rootReducer;
