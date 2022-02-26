import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AuthService from "../../services/auth.service"
const user = JSON.parse(localStorage.getItem("user"))

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      return await AuthService.loginUser(payload)
    } catch (error) {
      // const message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString()
      // thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue(error?.response.data.error)
      // return error?.response
    }
  }
)

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await AuthService.logoutUser()
})

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }
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
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoggedIn = false
      state.user = null
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
})
const { reducer } = authSlice
export default reducer
