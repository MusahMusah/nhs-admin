import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import Layout from './layout/reducer';

const reducer = {
  auth: authReducer,
  user: userReducer,
  Layout,
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;