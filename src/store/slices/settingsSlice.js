import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import settingsService from "../../services/settings.service"

export const getAllSettings = createAsyncThunk(
  "settings/allSettings",
  async (_, thunkAPI) => {
    try {
      return await settingsService.fetchAllSettings().then((response) => { return response.data.success.data })
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

export const getAllDashboardAnalytics = createAsyncThunk("settings/allDashboardAnalytics", async (_, thunkAPI) => {
  try {
    return await settingsService.fetchAllDashboardAnalytics().then((response) => { return response.data.success.data })
  } catch (error) {
    console.log(error)
  }
})

const settingSlice = createSlice({
  name: "settings",
  initialState: {
    dashboardAnalytics: [],
    settings: [],
    loading: false,
  },
  extraReducers: builder => {
    builder.addCase(getAllDashboardAnalytics.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(getAllDashboardAnalytics.fulfilled, (state, action) => {
      state.dashboardAnalytics = action.payload
      state.loading = true
    })

    builder.addCase(getAllSettings.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(getAllSettings.fulfilled, (state, action) => {
      state.settings = action.payload
      state.loading = false
    })
  }
})

export default settingSlice.reducer