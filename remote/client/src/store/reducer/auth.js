import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signOut } from "firebase/auth";

const initialAuthState = {
  isAuthenticated: false,
  authToken: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.authToken = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      const auth = getAuth();
      signOut(auth);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
