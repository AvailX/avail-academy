import React from 'react';
import { Box, Button, IconButton, InputBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const TopBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: '10px',
  color: '#fff',
}));

const IconGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
});

const SearchBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#4C0423',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  color: '#fff',
}));

const WalletButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(359.08deg, #FF028F 2.64%, #FF024B 99.76%)',
  color: '#fff',
  textTransform: 'none',
  padding: theme.spacing(1.5, 6),
  borderRadius: '4px',
  '&:hover': {
    background: 'linear-gradient(90deg, #ff6f81 0%, #ff4f6d 100%)',
  },
}));

const TopBar = () => {
  return (
    <TopBarContainer>
      {/* Left Section: Welcome Text */}
      <Typography variant='h6' component='div'>
        Welcome Back,{' '}
        <Box component='span' fontWeight='bold'>
          Nick
        </Box>
      </Typography>

      {/* Center Section: Icons + Search */}
      <IconGroup>
        <IconButton>
          <LanguageIcon style={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <SettingsIcon style={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <NotificationsIcon style={{ color: 'white' }} />
        </IconButton>

        {/* Search Bar */}
        <SearchBar>
          <SearchIcon />
          <InputBase
            placeholder='Search...'
            sx={{ ml: 1, color: 'inherit' }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchBar>
      </IconGroup>

      {/* Right Section: Connect Wallet Button */}
      <WalletButton>Connect Wallet</WalletButton>
    </TopBarContainer>
  );
};

export default TopBar;
