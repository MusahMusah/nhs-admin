import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import postService from "../../services/post.service"

export const getSinglePost = createAsyncThunk(
  "posts/singlePost",
  async (payload, thunkAPI) => {
    try {
      return await postService.fetchSinglePost(payload).then((response) => { return response.data.success.data })
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

const postSlice = createSlice({
  name: "posts",
  initialState: {
    post: [],
    loading: false,
  },
  extraReducers: builder => {
    builder.addCase(getSinglePost.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(getSinglePost.fulfilled, (state, action) => {
      state.post = action.payload
      state.loading = false
    })
  }
})

export default postSlice.reducer