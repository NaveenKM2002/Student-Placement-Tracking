import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillArchiveFill, BsSearch } from 'react-icons/bs';
import StudDashboard from "./StudDashboard";

function JobPostings() {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("http://localhost:7000/app/v3/job")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
  }, []);

  // Filter jobs based on search term
  const filteredJobs = user.filter(job =>
    job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StudDashboard>
      <div className="container-fluid" style={{ marginTop: "60px" }}>
        <div className="search-container" style={{ marginBottom: "20px" }}>
          <BsSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100px", marginLeft: "10px" }}
          />
        </div>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card job-card" style={{ backgroundColor: '#f8d7da' }}>
              <div className="card-body">
                <h3>FullStack Developers</h3>
                <BsFillArchiveFill className="card_icon" style={{ fontSize: '30px', color: '#dc3545' }} />
                <h1>20</h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card job-card" style={{ backgroundColor: '#d4edda' }}>
              <div className="card-body">
                <h3>Front-End Developers</h3>
                <BsFillArchiveFill className="card_icon" style={{ fontSize: '30px' }} />
                <h1>100</h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card job-card" style={{ backgroundColor: '#f8d7da' }}>
              <div className="card-body">
                <h3>Back-End Developers</h3>
                <BsFillArchiveFill className="card_icon" style={{ fontSize: '30px' }} />
                <h1>200</h1>
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
                    <Link to={`/student/Application`} className="btn btn-success">Apply</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StudDashboard>
  );
}

export default JobPostings;
