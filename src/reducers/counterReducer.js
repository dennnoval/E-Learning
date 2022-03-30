import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { counterAPI } from '../services'

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async () => await counterAPI.fetchCount().data
)

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle'
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    incrementIfOdd: (state, action) => {
      const currentVal = state.value
      if (currentVal % 2 === 1) {
        state.value += action.payload
      }
    },
    extraReducers: {
      [incrementAsync.pending]: state => {
        state.status = 'pending'
      },
      [incrementAsync.fulfilled]: (state, action) => {
        state.status = 'fulfilled'
        state.value += action.payload
      },
      [incrementAsync.rejected]: state => {
        state.status = 'rejected'
      }
    }
  }
})

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementIfOdd
} = counterSlice.actions

export default counterSlice.reducer
