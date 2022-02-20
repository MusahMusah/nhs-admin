import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userService from "../../services/user.service"

const initialState = {}
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {}
})

const { reducer } = userSlice
export default reducer