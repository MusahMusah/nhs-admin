import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice";
import Layout from './layout/reducer';

const reducer = {
  auth: authReducer,
  Layout,
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;