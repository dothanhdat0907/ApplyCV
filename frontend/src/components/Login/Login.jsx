import * as React from 'react';
import {Button, 
        CssBaseline, 
        TextField, 
        Link, 
        Paper, 
        Box, 
        Grid, 
        Typography, 
        createTheme, 
        ThemeProvider 
      } from '@mui/material';
import LoginImg from '../../assets/login.png'

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    const back_end_url = 'http://127.0.0.1:8000/sign-in/';
    const header = { 'Content-Type': 'application/json' };

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var jsondata = {
      username: data.get('username'),
      password: data.get('password'),
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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${LoginImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 25,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

