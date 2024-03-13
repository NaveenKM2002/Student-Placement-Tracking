import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ResponsiveDrawer from './dashboard';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import StudDashboard from './StudDashboard';

const SlideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LogoutButton = styled(Button)({
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

const SuccessDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function LogoutStud() {
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
    // Perform any logout actions here (e.g., clear localStorage, session, etc.)
    // For now, let's just navigate to the login page
    setOpen(false);
    setSuccessOpen(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000); // 2 seconds delay before navigation
  };

  const handleCloseSuccessDialog = () => {
    setSuccessOpen(false);
  };

  return (
    <StudDashboard>
      <div style={{ textAlign: 'center' ,marginTop:'50px'}}>
        <h2>Logout Page</h2>
        <p>Thank you for using our application!</p>
        <LogoutButton onClick={handleOpenDialog}>Logout</LogoutButton>
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
      <SuccessDialog
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
      </SuccessDialog>
      </StudDashboard>
  );
}

export default LogoutStud;
