import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useEffect } from 'react';
import { UserService } from '../../../service/UserInfo.service'
import { useDispatch } from "react-redux"
import { currentCV } from '../../../redux/CVSlice'
import { useNavigate } from "react-router-dom";

export default function Recruitment(props) {
  const { getRecruitmentCV } = UserService()
  const navigate = useNavigate()
  const [data, dataSet] = React.useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getRecruitmentCV(props.recruitmentdetail.id)
      dataSet(response)
    }
    fetchMyAPI()
  }, [])

  const handleCv = (data) => {
    dispatch(currentCV(data))
    navigate('/viewcv')
  } 
  
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
            <Typography variant="h6">
              List CV 
            </Typography>
            {data.map((item, index) => (
              <div key={item.id}>
                <Button variant="outlined" startIcon={<InsertDriveFileIcon />} onClick={() => handleCv(item.data)}>
                    {`CV ${index+1}`}
                </Button> <br/>
              </div>
            ))}
          </CardContent>
        </Card>
  );
}