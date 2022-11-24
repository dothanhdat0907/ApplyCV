import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Recruitment from '../Recruitment';
import { UserService } from '../../../service/UserInfo.service'
import { useEffect } from 'react';
import Box from '@mui/material/Box';

export default function Dashboard() {
  const { getAllRecruitment } = UserService()
  const [data, dataSet] = React.useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getAllRecruitment()
      dataSet(response)
    }
    fetchMyAPI()
  }, [])
  console.log(data)
  return (
    <Box sx={{  minWidth: 800, maxWidth: 800 }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained">
                Search
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        </AppBar>
      
      <Grid container spacing={2}>
      {data.map((item) => (
        <Grid key={item.id} item >
          <Recruitment recruitmentdetail = {item}/>
         </Grid>
      ))}
      </Grid>
       
    </Box>
    
  );
}