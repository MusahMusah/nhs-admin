import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AuthService from "../../services/auth.service"
const user = {name: "musahmusah"}

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const data = await AuthService.loginUser(payload);
      return data
      // return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    // [logout.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  },
});
const { reducer } = authSlice;
export default reducer;