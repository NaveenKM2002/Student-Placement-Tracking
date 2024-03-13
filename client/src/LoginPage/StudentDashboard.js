import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [user, setUser] = useState([]);

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

  return (
    <div>
        <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
      <table className="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Role</th>
            <th>Qualification</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e) => (
            <tr key={e._id}>
              <td>{e.companyname}</td>
              <td>{e.role}</td>
              <td>{e.qualification}</td>
              <td>{e.salary}</td>
              <td>{e.address}</td>
              <td>
                <button className="btn btn-danger" onClick={() => del(e._id)}>Delete</button>
                <Link to={`/update/${e._id}`} className="btn btn-success">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDashboard;
