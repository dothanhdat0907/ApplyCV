import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";

const initCategories = [    
  {index: 0, id: 'Dashboard', link: 'mainpage'},
  {index: 1, id: 'My Recruitment', link: 'MyRecruitment'},
  {index: 2, id: 'My Profile', link: 'Profile'},
  {index: 3, id: 'Quit' },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

export default function Navigator(props) {
  const { ...other } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate();

  const handleChageActive = (id) => {
    if(id === 'Quit') {
      localStorage.clear()
      navigate('/')
      window.location.reload();
      return
    }
    initCategories.forEach((item, index) => {
      if(item.id === id) {
        setSelectedIndex(index)
        navigate(`/${item.link}`)
      }
    }) 
  }
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, fontSize: 45, color: '#fff' }}>
          ApplyCV
        </ListItem>
        {initCategories.map(({ index, id }) => (
          <ListItem key={id}>
            <ListItemButton onClick={() => handleChageActive(id)} selected={selectedIndex === index} sx={item}>
              <ListItemText>{id}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ mt: 2 }} />
      </List>
    </Drawer>
  );
}