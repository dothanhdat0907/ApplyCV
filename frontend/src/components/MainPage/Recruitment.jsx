import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { UserService } from '../../service/UserInfo.service';
import { useSelector, useDispatch } from 'react-redux'

export default function Recruitment(props) {
  const user = useSelector((state) => state.user)
  const {getCompany, storeCV} = UserService()
  const [data, dataSet] = React.useState([])
  const [CVFile, setCVFile] = React.useState(null)

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getCompany(props.recruitmentdetail.idCompany)
      dataSet(response)
    }
    fetchMyAPI()
  }, [])

  const handlePdfFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("Smt Wrong!!")
      return
    }
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setCVFile(e.target.result);
    }
  }
  
  const applyCV = async(e) => {
    e.preventDefault()
    const jsondata = {
      idAccount: user.id,
      idRecruitment: props.recruitmentdetail.id,
      data: CVFile
    }
    const respone = await storeCV(jsondata)
    alert('Apply Succesful')
  }

  return (
        <Card sx={{minWidth: 800}}>
          <CardContent sx={{display: 'flex'}}>
           <Box sx={{ flexGrow: 1 }}>
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
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">
                {data.name}
              </Typography>
              <Typography variant="body2">
                {data.email}
              </Typography>
              <Typography variant="body2">
                {data.phoneNumber}
              </Typography>
              <Typography variant="body2">
                {data.address}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
          <form onSubmit={applyCV}>
            <input className='form-control' accept="application/pdf" type="file" required onChange={handlePdfFile}
            /> <br></br>
            <button className='btn btn-success' type="submit">
              Apply
            </button>
          </form>
          </CardActions>
        </Card>
  );
}