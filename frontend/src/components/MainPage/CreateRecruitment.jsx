import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import {Button, 
        CssBaseline,
        TextField,
        Grid,
        Box,
        Typography, 
        Container, 
        createTheme,
        ThemeProvider,
        InputLabel,
        MenuItem,
        FormControl,
        Select 
      } from '@mui/material';
import { UserService } from '../../service/UserInfo.service';

const theme = createTheme();

const Jobs = [
  'Computer Scientist',
  'IT Professional',
  'UX Designer & UI Developer',
  'SQL Developer',
  'Web Designer',
  'Web Developer',
  'Help Desk Worker',
  'Software Engineer',
  'Data Entry',
  'DevOps Engineer',
  'Computer Programmer',
  'Network Administrator',
  'Information Security Analyst',
  'Artificial Intelligence Engineer',
  'Cloud Architect',
  'IT Manager',
  'Technical Specialist',
  'Application Developer',
  'Chief Technology Officer (CTO)',
  'Chief Information Officer (CIO)'
]

const Salarys = [
  'under 10 million vnd',
  '10 to 20 million vnd',
  '20 to 50 million vnd',
  'above 50 million vnd',
]

export default function CreateRecruitment() {
  const user = useSelector((state) => state.user) 
  const navigate = useNavigate()
  const {createRecruitment} = UserService()
  const [Job, setJob] = React.useState('');
  const [Salary, setSalary] = React.useState('');

  const handleJob = (event) => {
    setJob(event.target.value);
  };  
  const handleSalary = (event) => {
    setSalary(event.target.value);
  };  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    var jsondata = {
      idCompany: user.id,
      job: Job,
      salary: Salary,
      tag: data.get('tag'),
      description: data.get('description'),
      time: data.get('time'),
      isApproved: false,
    };
    const response = await createRecruitment(jsondata)
    if(typeof response === 'object') {
      alert("Sucessful")
      navigate('/mainpage')
    }
    
  };

  const handleCancel = () => {
    navigate('/mainpage')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Create New Recruitment
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  autoComplete="tag"
                  name="tag"
                  required
                  fullWidth
                  id="tag"
                  label="Tag"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="job">Job</InputLabel>
                  <Select
                    labelId="job"
                    id="job"
                    value={Job}
                    label="Job"
                    onChange={handleJob}
                  >
                    {Jobs.map((item) => (
                      <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="salary">Salary</InputLabel>
                  <Select
                    labelId="salary"
                    id="salary"
                    value={Salary}
                    label="Salary"
                    onChange={handleSalary}
                  >
                    {Salarys.map((item) => (
                      <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  id="description"
                  autoComplete="Description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="time"
                  label="Time"
                  id="time"
                  autoComplete="Time"
                />
              </Grid>   
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}