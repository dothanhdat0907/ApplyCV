import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    name:'name',
    email:'email',
    phonenumber: '012345',
    address: 'address'
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phonenumber = action.payload.phonenumber;
      state.address = action.payload.address;
    }
  }
})

export const { update } = userSlice.actions

export default userSlice.reducer