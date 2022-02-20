import { createAction, createReducer } from '@redux'


export const setUser = createAction('SET_USER', (user) => {
  payload: user
})

const initialState = {
  user:{}
}

export const manageUser = createReducer(initialState, builder => {
  builder.addCase(setUser,(action) => {
    user = action.payload
  })
})