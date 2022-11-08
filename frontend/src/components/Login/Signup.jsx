import * as React from 'react';
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

const theme = createTheme();

export default function SignUp() {
  const [role, setRole] = React.useState('')
  const handleRole = (event) => {
    setRole(event.target.value)
  }

  const handleSubmit = (event) => {
    const back_end_url = 'http://127.0.0.1:8000/sign-up/';
    const header = { 'Content-Type': 'application/json' };

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var jsondata = {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      role: role,
    };
    fetch(back_end_url,{
        method: 'POST',
        headers: header,
        mode: 'cors',
        body: JSON.stringify(jsondata)
      }
    ).then(async (response)=>{
      // Get json data
      var data = await response.json();
      console.log(data);
      // Get status code
      console.log(response.statusText);
      console.log(response.status);
    }).catch((error)=>{
        console.log('something wrong:::',error);
    });  
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
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
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
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