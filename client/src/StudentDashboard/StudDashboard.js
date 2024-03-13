import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ListIcon from '@mui/icons-material/List';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { NewContext } from './Context';



const drawerWidth = 240;




function StudDashboard({ window, children }) {

  const { id } = useParams()

  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  // console.log(id)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/studdashboard/', icon: <HomeIcon /> },
    { text: 'Student Profile', path: `/student/profile/${id}`, icon: <LeaderboardIcon /> },
    { text: 'Job Posting', path: '/student/jobposting', icon: <ListIcon /> },
    { text: 'Job Application', path: '/student/Application', icon: <GroupIcon /> },
    { text: 'Job Application Status', path: '/student/status', icon: <GroupIcon /> },
    { text: 'Help and Support', path: '/student/help', icon: <QueryStatsIcon /> },
    { text: 'Logout', path: '/student/logout', icon: <QueryStatsIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#33adff' } }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
  
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              DASHBOARD
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          {children}


        </Box>
      </Box>
   
  );
}
StudDashboard.propTypes = {
  window: PropTypes.func,
}

export default StudDashboard;
