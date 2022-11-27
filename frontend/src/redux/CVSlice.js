import { createSlice } from '@reduxjs/toolkit'

export const CVSlice = createSlice({
  name: 'CV',
  initialState: {
    data: ''
  },
  reducers: {
    currentCV: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { currentCV } = CVSlice.actions

export default CVSlice.reducer