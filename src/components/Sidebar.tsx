import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  Typography,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { styled } from '@mui/material/styles';

const SidebarContainer = styled(Box)(({ theme }) => ({
  height: '85vh',
  width: '250px',
  // background: 'linear-gradient(180deg, #3a003c 0%, #6a0d58 100%)',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginLeft: '20px',
  border: '1px solid #FFFFFF1A',
  borderRadius: '26px',
  backgroundColor: 'rgba(0, 0, 0, 0.21)',
}));

const SidebarButton = styled(Button)(({ theme }) => ({
  textTransform: 'inherit',
  margin: theme.spacing(1, 0),
  justifyContent: 'flex-start',
  borderRadius: '20px',
  padding: theme.spacing(1.5),
  backgroundColor: '#FF0360',
  color: '#fff',
  width: '100%',
  '&:hover': {
    backgroundColor: '#ff6f81',
  },
}));

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        {/* Upper part with Navigation Links */}
        <List>
          <ListItem>
            <Box
              sx={{
                height: '50px',
                backgroundColor: '#ff4f6d',
                width: '100%',
                borderRadius: '10px',
                mb: 2,
              }}
            />
          </ListItem>

          <NavLink to='/home' style={{ textDecoration: 'none' }}>
            <SidebarButton>
              <ListItemIcon>
                <HomeOutlinedIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <Typography textTransform='inherit'>Home</Typography>
            </SidebarButton>
          </NavLink>

          <NavLink to='/lessons' style={{ textDecoration: 'none' }}>
            <SidebarButton>
              <ListItemIcon>
                <MenuBookOutlinedIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <Typography textTransform='inherit'>Lessons</Typography>
            </SidebarButton>
          </NavLink>

          <NavLink to='/profile' style={{ textDecoration: 'none' }}>
            <SidebarButton>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <Typography textTransform='inherit'>Profile</Typography>
            </SidebarButton>
          </NavLink>
        </List>
      </div>

      {/* Log Out Button at the Bottom */}
      <Box sx={{ textAlign: 'center', mt: 'auto' }}>
        <Button
          variant='text'
          startIcon={<ExitToAppOutlinedIcon />}
          sx={{
            color: '#fff',
            textTransform: 'none',
          }}
        >
          Log Out
        </Button>
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;
