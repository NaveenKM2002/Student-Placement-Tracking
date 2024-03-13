import React, { useState, useEffect } from "react";
import axios from "axios";
// import './JobReport.css'; // Import CSS file for styling

const JobReport = () => {
  const [jobReports, setJobReports] = useState([]);

  useEffect(() => {
    // Fetch job reports from the server
    axios.get("http://localhost:7000/app/v3/jobReports")
      .then((res) => {
        console.log(res.data);
        setJobReports(res.data);
      })
      .catch((error) => {
        console.error("Error fetching job reports:", error);
      });
  }, []);

  return (
    <div className="job-report-container">
      <h2 className="title">Job Reports</h2>
      {jobReports.length === 0 ? (
        <p>No job reports available.</p>
      ) : (
        <ul className="job-reports-list">
          {jobReports.map((report) => (
            <li key={report._id} className="job-report-item">
              <div className="report-details">
                <h3>{report.companyName}</h3>
                <p><strong>Reported by:</strong> {report.reportedBy}</p>
                <p><strong>Date:</strong> {report.date}</p>
              </div>
              <div className="report-actions">
                <button className="btn btn-danger">Delete</button>
                {/* Add more actions as needed */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobReport;
