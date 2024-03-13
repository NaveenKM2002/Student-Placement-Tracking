import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillArchiveFill, BsFillBellFill, BsFillGrid3X3GapFill, BsPeopleFill, BsSearch } from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle } from 'recharts';
import "./home.css"
import ResponsiveDrawer from './dashboard';

function Home1() {
  const [jobApplicationsCount, setJobApplicationsCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [jobPosterCount, setJobPosterCount] = useState(0);
  const [interviewResultsCount, setInterviewResultsCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:7000/app/v4/jobapply')
      .then((res) => {
        const applications = res.data;
        setJobApplicationsCount(applications.length);
        // Filter applications with status 'Selected'
        const selectedApplications = applications.filter(app => app.status === 'Selected');
        setInterviewResultsCount(selectedApplications.length);
      })
      .catch((error) => {
        console.error('Error fetching job applications:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:7000/app/v2/reg/get')
      .then((res) => {
        setStudentCount(res.data.length);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:7000/app/v3/job')
      .then((res) => {
        setJobPosterCount(res.data.length);
      })
      .catch((error) => {
        console.error('Error fetching job posters:', error);
      });
  }, []);

  return (
    <>
      <ResponsiveDrawer>
        <div className="home-container" style={{marginTop:'50px'}}>
          <div className="left-panel">
            {/* Left side components */}
          </div>
          <div className="right-panel">
            {/* Right side content */}
            <main className='main- row'>
              <div className='main-title'>
                <h3>DASHBOARD</h3>
                <div className="search-container">
                  <BsSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: 100 }}
                  />
                </div>
              </div>

              <div className='main-cards '>
                <div className='card'>
                  <div className='card-inner'>
                    <h3>Job Applications</h3>
                    <BsFillArchiveFill className='card_icon' />
                  </div>
                  <h1>{jobApplicationsCount}</h1>
                </div>
                <div className='card '>
                  <div className='card-inner'>
                    <h3>Students Register</h3>
                    <BsFillGrid3X3GapFill className='card_icon' />
                  </div>
                  <h1>{studentCount}</h1>
                </div>
                <div className='card '>
                  <div className='card-inner'>
                    <h3>Job Posters</h3>
                    <BsPeopleFill className='card_icon' />
                  </div>
                  <h1>{jobPosterCount}</h1>
                </div>
                <div className='card '>
                  <div className='card-inner'>
                    <h3>Interview Results</h3>
                    <BsFillBellFill className='card_icon' />
                  </div>
                  <h1>{interviewResultsCount}</h1>
                </div>
              </div>

              <div className='charts '>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={[
                      { name: 'Job Applications', count: jobApplicationsCount },
                      { name: 'Students Register', count: studentCount },
                      { name: 'Job Posters', count: jobPosterCount },
                      { name: 'Interview Results', count: interviewResultsCount },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={[
                      { name: 'Job Applications', count: jobApplicationsCount },
                      { name: 'Students Register', count: studentCount },
                      { name: 'Job Posters', count: jobPosterCount },
                      { name: 'Interview Results', count: interviewResultsCount },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </main>
          </div>
        </div>
      </ResponsiveDrawer>
    </>
  );
}

export default Home1;
