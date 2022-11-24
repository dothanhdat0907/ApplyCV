import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../../redux/userSlice'
import { UserService } from '../../../service/UserInfo.service';

export default function Profile() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const {updateUser} = UserService()
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      username: user.username,
      password: user.password,
      name: data.get('fullname'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      address: data.get('address'),
      isAdmin: false,
      isEmployee: true,
      isCompany: false
    };
    const storeUser = {
      id: user.id,
      ...newUser
    }
    dispatch(update(storeUser))
    await updateUser(newUser)
    alert("Update complete!")

  }

  return (
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Fullname"
                  defaultValue={user.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  defaultValue={user.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  id="phoneNumber"
                  autoComplete="phoneNuber"
                  defaultValue={user.phonenumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address"
                  defaultValue={user.address}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" sx={{ '& button': { m: 1 }}} >
            <Button
                type="submit"
                size='large'
                variant="contained"
              >
                Save
              </Button>
          </Grid>
        </Box>
  );
}