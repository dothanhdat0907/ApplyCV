import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    id: 0,
    username: 'username',
    password: 'password',
    name:'name',
    email:'email',
    phonenumber: '012345',
    address: 'address',
    role: ''
  },
  reducers: {
    update: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phonenumber = action.payload.phoneNumber;
      state.address = action.payload.address;
      state.username = action.payload.username;
      state.password = action.payload.password;
      if(action.payload.isAdmin === true) {
        state.role = 'Admin'
      }
      if(action.payload.isCompany === true) {
        state.role = 'Company'
      }
      if(action.payload.isEmployee === true) {
        state.role = 'Employee'
      }
    }
  }
})

export const { update } = userSlice.actions

export default userSlice.reducer