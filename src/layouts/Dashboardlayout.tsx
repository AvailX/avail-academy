import deskbg from 'assets/desk-bg.svg';
import { Box } from '@mui/material';
import Sidebar from 'components/Sidebar';
import TopBar from 'components/TopBar';
import { FC, PropsWithChildren } from 'react';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      width='100vw'
      minHeight='100vh'
      sx={{
        background: `url(${deskbg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      display='flex'
      position='relative'
    >
      <Box
        sx={{
          position: 'fixed',
          top: '5%',
          left: 0,
          width: '220px',
          height: '100vh',
          zIndex: 1000,
        }}
      >
        <Sidebar />
      </Box>

      <Box
        sx={{
          marginLeft: '220px',
          width: 'calc(100vw - 220px)',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            left: '300px',
            width: 'calc(100vw - 300px)',
            zIndex: 1000,
          }}
        >
          <TopBar />
        </Box>

        <Box
          sx={{
            marginTop: '100px',
            padding: '20px',
            width: 'calc(100vw - 290px)',
            marginLeft: '290px',
            top: 0,
            left: 0,
            position: 'fixed',
            overflowY: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
