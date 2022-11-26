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

const Salarys = [
  'under 10 million vnd',
  '10 to 20 million vnd',
  '20 to 50 million vnd',
  'above 50 million vnd',
]
export default function Dashboard() {
  const { getAllRecruitment, getSearchRecruitment } = UserService()
  const [data, dataSet] = React.useState([])
  const [search, setSearch] = React.useState('')
  
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getAllRecruitment()
      dataSet(response)
    }
    fetchMyAPI()
  }, [data])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  const Search = async() => {
    const jsondata = {
      job: '',
      salary: ''
    }
    if(search.indexOf(',') === -1) {
      const reg = /^[a-z A-Z]+$/;
      if(reg.test(search)){
        jsondata.job = search
      } else {
        let sal = search.substring(0,search.length-1)
        let num = parseInt(sal)
        if(num < 10) {
          jsondata.salary = Salarys[0]
        } else if(num < 20) {
          jsondata.salary = Salarys[1]
        } else if(num < 50) {
          jsondata.salary = Salarys[2]
        } else {
          jsondata.salary = Salarys[3]
        }
      }
    } else {
      jsondata.job = search.substring(0,search.indexOf(','))
      let sal = search.substring(search.indexOf(',')+2,search.length-1)
      let num = parseInt(sal)
      if(num < 10) {
        jsondata.salary = Salarys[0]
      } else if(num < 20) {
        jsondata.salary = Salarys[1]
      } else if(num < 50) {
        jsondata.salary = Salarys[2]
      } else {
        jsondata.salary = Salarys[3]
      } 
    }
    const response = await getSearchRecruitment(jsondata)
    console.log(response)
  }
  
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
              <SearchIcon color="inherit" sx={{ display: 'block' }}/>
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by job or salary (Example: Front-end Dev, 15M)"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
                value={search}
                onChange={handleSearch}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={Search}>
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