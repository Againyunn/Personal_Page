import { createSlice } from "@reduxjs/toolkit";

const menuToggle = createSlice({
  name: "menuToggle",
  initialState: {
    activate: false,
  },
  reducers: {
    // 메뉴 토글 활성화 여부
    isMenuToggleActivated(state, action) {
      state.activate = action.payload;
    },
  },
});

export const { isMenuToggleActivated } = menuToggle.actions;
export default menuToggle.reducer;
