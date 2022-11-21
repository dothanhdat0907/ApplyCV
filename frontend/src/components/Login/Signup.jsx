import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { update } from '../../redux/userSlice'
import {Button, 
        CssBaseline,
        TextField,
        Link,
        Grid,
        Box,
        Typography, 
        Container, 
        Radio, 
        FormControlLabel, 
        FormControl, 
        FormLabel, 
        RadioGroup, 
        createTheme,
        ThemeProvider 
      } from '@mui/material';
import { UserService } from '../../service/UserInfo.service';

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [role, setRole] = React.useState('')
  const handleRole = (event) => {
    setRole(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {SignUp} = UserService()
    const data = new FormData(event.currentTarget);
    var jsondata = {
      name: data.get('fullname'),
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      phoneNumber: data.get('phoneNumber'),
      address: data.get('address'),
      role: role,
    };
    const response = await SignUp(jsondata)
    console.log(response)
    if(typeof response === 'object') {
      dispatch(update(response))
      navigate('/mainpage')
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Fullname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="role"></FormLabel>
                  <RadioGroup
                    aria-labelledby="role-group-label"
                    name="radio-buttons-group"
                    value={role}
                    onChange={handleRole}
                  >
                    <FormControlLabel value="employee" control={<Radio />} label="Employee" />
                    <FormControlLabel value="company" control={<Radio />} label="Company" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}