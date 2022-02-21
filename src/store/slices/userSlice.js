import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userService from "../../services/user.service"

export const getAllUsers = createAsyncThunk(
  "users/allUsers",
  async (_, thunkAPI) => {
    try {
      return await userService.fetchAllUsers()
                              .then((response) => {
                                return response.data
                              })
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  extraReducers: builder => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
  }
})

const { reducer } = userSlice
export default reducer