import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Students.css";
import ResponsiveDrawer from "./dashboard";

function JobApplication() {
    const [user, setUser] = useState([]);

    function del(a) {
      axios.delete(`http://localhost:7000/app/v4/jobapply/${a}`)
        .then(res => {
          console.log(res.data);
          if (res.data.msg === 'deleted') {
            alert("Deleted Successfully")
          } else {
            alert("Data's are removed")
          }
        })
    }

    function updateStatus(id, status) {
      axios.patch(`http://localhost:7000/app/v4/jobapply/${id}`, { status })
        .then(res => {
          console.log(res.data);
          // Update user state or perform any necessary actions after updating status
        })
        .catch(error => {
          console.error('Error updating status:', error);
        });
    }
  
    useEffect(() => {
      axios.get("http://localhost:7000/app/v4/jobapply/")
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
    }, []);

  return (
    <>
    <ResponsiveDrawer>
    <div className="container" style={{marginTop:'70px'}}>
      <div className="water-drops"></div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Qualification</th>
            <th>Percentage</th>
            <th>Gender</th>
            <th>Resume File</th>
            <th>Modify</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e) => (
            <tr key={e._id}>
              <td>{e.fname}</td>
              <td>{e.lname}</td>
              <td>{e.dob}</td>
              <td>{e.address}</td>
              <td>{e.qualification}</td>
              <td>{e.percentage}</td>
              <td>{e.gender}</td>
              <td>
                <a href={`http://localhost:7000/${e.file}`} download>
                  {e.file}
                </a>
              </td>
              <td>
                <button className="btn btn-danger mb-2 btn-sm" onClick={() => del(e._id)}>Delete</button>
                {/* <Link to={`/update/${e._id}`} className="btn btn-success">Update</Link> */}
              </td>
              <td>
                <button className="btn btn-info btn-sm me-1 mb-1" onClick={() => updateStatus(e._id, 'Selected')}>Selected</button>
                <button className="btn btn-warning btn-sm me-1 mb-1" onClick={() => updateStatus(e._id, 'Pending')}>Pending</button>
                <button className="btn btn-secondary btn-sm" onClick={() => updateStatus(e._id, 'Rejected')}>Rejected</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </ResponsiveDrawer>
    </>
  )
}

export default JobApplication;
