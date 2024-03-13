import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveDrawer from './dashboard';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const SlideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Logout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleConfirmLogout = () => {
    setOpen(false);
    setSuccessOpen(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  const handleCloseSuccessDialog = () => {
    setSuccessOpen(false);
  };

  return (
    <ResponsiveDrawer>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #00b4db, #0083B0)',
        color: '#fff'
      }}>
        <h2 style={{fontFamily:"fantasy",fontSize:"40px"}}>Logout Page</h2>
        <p>Thank you for using our application!</p>
        <Button onClick={handleOpenDialog} style={{ backgroundColor: '#fff', color: '#000' }}>Logout</Button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={SlideTransition}
        keepMounted
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Confirm Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="primary">
            Yes, Logout
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={successOpen}
        TransitionComponent={SlideTransition}
        keepMounted
        onClose={handleCloseSuccessDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Logout Successful"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You have been logged out successfully.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </ResponsiveDrawer>
  );
}

export default Logout;
