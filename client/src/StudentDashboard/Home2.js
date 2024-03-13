import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
import StudDashboard from './StudDashboard';

const Home2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [itCompaniesData, setItCompaniesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Data for the top five IT companies with their respective grades
    const topFiveCompanies = [
      { name: 'Infosys', grade: 90 },
      { name: 'TCS', grade: 85 },
      { name: 'Accenture', grade: 80 },
      { name: 'Capgemini', grade: 75 },
      { name: 'Google', grade: 95 },
    ];

    // Set the fetched data to the state
    setItCompaniesData(topFiveCompanies);
  }, []);

  return (
    <StudDashboard>
      <div style={{ marginTop: "70px" }}>
        <Box p={3} bgcolor="#f5f5f5" color="#333" boxShadow={3} borderRadius={10}>
          <Typography variant="h4" gutterBottom>
            IT Companies Overview
          </Typography>
          <div className="search-container">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: 100, color: '#333' }}
            />
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, bgcolor: "#fafafa", color: "#333" }} borderRadius={10}>
                <Typography variant="h6">IT Company Grades</Typography>
                <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
                  <BarChart
                    data={itCompaniesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="grade" fill="#333" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, bgcolor: "#fafafa", color: "#333" }} borderRadius={10}>
                <Typography variant="h6">IT Company Grades Trend</Typography>
                <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
                  <LineChart
                    data={itCompaniesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="grade" stroke="#333" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </StudDashboard>
  );
}

export default Home2;
