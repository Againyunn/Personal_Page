import * as types from "./actionTypes";

// 접속 유저 설정
export const setUser = ({ user, gender, age }) => ({
  type: types.SET_USER,
  user,
  gender,
  age,
});

// 유저 로그인
export const userLogin = ({ thisUser }) => ({
  type: types.USER_LOGIN,
  thisUser,
});

// 유저 로그아웃
export const userLogout = () => ({
  type: types.USER_LOGOUT,
});

// 메뉴 토글 제어
export const menuToggle = ({ activate }) => ({
  type: types.MENU_TOGGLE,
  activate,
});
