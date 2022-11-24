import * as React from 'react';
import Recruitment from '../Recruitment';
import Grid from '@mui/material/Grid'
import { UserService } from '../../../service/UserInfo.service'
import { useEffect } from 'react';
import { Box } from '@mui/material';


export default function MyRecruitment() {
  
  return (
    <Box sx={{  minWidth: 800, maxWidth: 800 }}>
      <Grid container spacing={2}>
      <Grid item >
        <Recruitment/>
      </Grid>
      <Grid item >
        <Recruitment/>
      </Grid>
      </Grid>
    </Box>
  );
}