import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import StudDashboard from './StudDashboard';
import axios from 'axios';

const JobStatus = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/app/v4/jobapply/')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error('Error fetching applications:', error);
      });
  }, []);

  return (
    <StudDashboard>
      <div style={{ marginTop: '70px' }}>
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            Job Application Status
          </Typography>
          <Grid container spacing={3}>
            {applications.map(application => (
              <Grid item xs={12} sm={6} md={4} key={application._id}>
                <Paper elevation={3} sx={{
                  p: 2,
                  backgroundColor: getStatusColor(application.status),
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                  '@media (max-width:600px)': {
                    width: '100%',
                  }
                }}>
                  <Typography variant="h6">{`${application.fname} ${application.lname}`}</Typography>
                  <Typography variant="subtitle1" gutterBottom>{application.dob}</Typography>
                  <Typography variant="body2" gutterBottom>{`Address: ${application.address}`}</Typography>
                  <Typography variant="body2" gutterBottom>{`Qualification: ${application.qualification}`}</Typography>
                  <Typography variant="body2" gutterBottom>{`Status: ${application.status}`}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </StudDashboard>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return '#FFD700'; // Golden yellow
    case 'Rejected':
      return '#FF6347'; // Tomato red
    case 'Interview':
      return '#87CEEB'; // Sky blue
    case 'Selected':
      return '#32CD32'; // Lime green
    default:
      return '#FFFFFF'; // White
  }
};

export default JobStatus;
