import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import settingReducer from "./slices/settingsSlice";
import postReducer from "./slices/postSlice";
import Layout from './layout/reducer';

const reducer = {
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  setting: settingReducer,
  Layout,
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;