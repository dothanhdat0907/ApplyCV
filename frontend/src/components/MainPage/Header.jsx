import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {
  const { onDrawerToggle } = props;
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)

  const createRecruitment = () => {
    navigate('/create')
  }
  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h3" component="h1">
                {props.getTitle()}
              </Typography>
            </Grid>
            {user.role === "Company" ? (<Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="contained"
                color="inherit"
                size="large"
                onClick={createRecruitment}
              >
                Create New Recruitment
              </Button>
            </Grid>) : <></> }
            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="large"
              >
               {`${user.role}: ${user.name}`}
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;