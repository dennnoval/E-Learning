import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, authReducer } from './reducers'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

export default store
