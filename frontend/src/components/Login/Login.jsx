import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { update } from '../../redux/userSlice'
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
import { UserService } from '../../service/UserInfo.service';

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {SignIn} = UserService()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var jsondata = {
      username: data.get('username'),
      password: data.get('password'),
    };
    const response = await SignIn(jsondata)
    if(typeof response === 'object') {
        dispatch(update(response))
        navigate("/mainpage");
      }
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

