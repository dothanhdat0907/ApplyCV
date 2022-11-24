import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function Recruitment(props) {
  return (
        <Card sx={{  minWidth: 800}}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.recruitmentdetail.tag}
            </Typography>
            <Typography variant="h5" component="div">
              {props.recruitmentdetail.job}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.recruitmentdetail.salary}
            </Typography>
            <Typography variant="body2">
              {props.recruitmentdetail.description}
            </Typography>
            <Typography variant="body2">
              {props.recruitmentdetail.time}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">Apply</Button>
          </CardActions>
        </Card>
  );
}