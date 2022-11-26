import * as React from 'react';
import Recruitment from './Recruitment';
import Grid from '@mui/material/Grid'
import { UserService } from '../../../service/UserInfo.service'
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'


export default function MyRecruitment() {
  const { getCompanyRecruitment } = UserService()
  const [data, dataSet] = React.useState([])
  const user = useSelector((state) => state.user)

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getCompanyRecruitment(user.id)
      dataSet(response)
    }
    fetchMyAPI()
  }, [])

  return (
    <Box sx={{  minWidth: 800, maxWidth: 800 }}>
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