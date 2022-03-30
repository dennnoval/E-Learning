import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 0,
    authenticated: 'false'
  },
  reducers: {
    login: state => {
      state.value = 1
      state.authenticated = 'true'
    },
    logout: state => {
      state.value = 0
      state.authenticated = 'false'
    }
  }
})

export const {
  login,
  logout
} = authSlice.actions

export default authSlice.reducer
