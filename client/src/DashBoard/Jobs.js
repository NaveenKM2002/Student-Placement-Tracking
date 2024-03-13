import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillArchiveFill, BsSearch } from 'react-icons/bs';
import ResponsiveDrawer from "./dashboard";
import JobsForm from './jobsForm';

function Jobs() {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showJobForm, setShowJobForm] = useState(false);

  function del(a) {
    axios.delete(`http://localhost:7000/app/v3/job/${a}`)
      .then(res => {
        console.log(res.data);
        if (res.data.msg === 'deleted') {
          alert("Deleted Successfully")
        } else {
          alert("Data's are removed")
        }
      })
  }

  useEffect(() => {
    axios.get("http://localhost:7000/app/v3/job")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
  }, []);

  const handleSubmit = (jobData) => {
    axios.post("http://localhost:7000/app/v3/job", jobData)
      .then((res) => {
        console.log(res.data);
        // Refresh the job list
        axios.get("http://localhost:7000/app/v3/job")
          .then((res) => {
            setUser(res.data);
          })
      })
      .catch((error) => {
        console.error('Error adding job:', error);
      });
  };

  // Filter jobs based on search term
  const filteredJobs = user.filter(job =>
    job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Count the number of frontend developers
  const frontendDeveloperCount = filteredJobs.filter(job => job.role.toLowerCase() === 'front-end developer').length;
  const backendDeveloperCount = filteredJobs.filter(job => job.role.toLowerCase() === 'back-end developer').length;
  const fullStackCount = filteredJobs.filter(job => job.role.toLowerCase() === 'Full Stack developer').length;
  const toggleJobForm = () => {
    setShowJobForm(!showJobForm);
  };

  return (
    <ResponsiveDrawer>
      <div className="container-fluid" style={{marginTop:'70px'}}>
        <div className="row align-items-center justify-content-center mb-4">
          <div className="col-12 col-md-6">
            <div className="search-container">
              <BsSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 text-md-end mb-3 mb-md-0">
            <button className="btn btn-primary" onClick={toggleJobForm}>
              Add Job
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card job-card" style={{ backgroundColor: '#f8d7da' }}>
              <div className="card-body">
                <h3>FullStack Developers</h3>
                <BsFillArchiveFill className="card_icon" style={{ fontSize: '30px', color: '#dc3545' }} />
                <h1>{fullStackCount}</h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card job-card" style={{ backgroundColor: '#d4edda' }}>
              <div className="card-body">
                <h3>Front-End Developers</h3>
                <BsFillArchiveFill className="card_icon" style={{ fontSize: '30px' }} />
                <h1>{frontendDeveloperCount}</h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card job-card" style={{ backgroundColor: '#f8d7da' }}>
              <div className="card-body">
                <h3>Back-End Developers</h3>
                <BsFillArchiveFill className="card_icon" style={{ fontSize: '30px' }} />
                <h1>{backendDeveloperCount}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredJobs.map((e) => (
            <div className="col-12 col-md-4 mb-4" key={e._id}>
              <div className="card job-card" style={{ backgroundColor: '#d4edda' }}>
                <div className="card-body">
                  <h3>{e.companyname}</h3>
                  <BsFillArchiveFill className="card_icon" style={{ fontSize: '30px' }} />
                  <ul className="list-unstyled">
                    <li><strong>Role:</strong> {e.role}</li>
                    <li><strong>Qualification:</strong> {e.qualification}</li>
                    <li><strong>Salary:</strong> {e.salary}</li>
                    <li><strong>Address:</strong> {e.address}</li>
                  </ul>
                  <div className="card-actions">
                    <button className="btn btn-danger" onClick={() => del(e._id)}>Delete</button>
                    <Link to={`/updatejob/${e._id}`} className="btn btn-success">Update</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showJobForm && <JobsForm onSubmit={handleSubmit} />}
    </ResponsiveDrawer>
  );
}

export default Jobs;
