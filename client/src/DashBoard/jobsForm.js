import React, { useState } from "react";
import axios from "axios";

function JobsForm() {
  const [role, setRole] = useState("");
  const [qualification, setQualification] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [companyname,setCompanyname]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      companyname:companyname,
      role: role,
      qualification: qualification,
      salary: salary,
      address: address
    };

    axios.post("http://localhost:7000/app/v3/job/post", newJob)
      .then((res) => {
        console.log(res.data);
        alert("Job added successfully!");
        
        // Clear the form fields after submission
        setRole("");
        setQualification("");
        setSalary("");
        setAddress("");
      })
      .catch((error) => {
        console.error("Error adding job:", error);
      });
  };

  return (
    <div style={{marginTop:'70px'}}>
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Company name:</label>
          <input type="text" value={companyname} onChange={(e) => setCompanyname(e.target.value)} required />
          
        </div>
        <div>
          <label>Role:</label>
          {/* <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required /> */}
          <select  value={role} onChange={(e) => setRole(e.target.value)} required>
            <option>Select</option>
            <option >Front-end developer</option>
            <option >Back-end developer</option>
            <option>Full Stack developer</option>
            <option>Others</option>
          </select>
        </div>
        <div>
          <label>Qualification:</label>
          <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} required />
        </div>
        <div>
          <label>Salary:</label>
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JobsForm;
