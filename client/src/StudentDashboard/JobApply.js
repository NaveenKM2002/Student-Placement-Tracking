import React, { useState } from 'react';
import axios from 'axios';
import './jobApply.css'; // Import CSS file for styling
import StudDashboard from './StudDashboard';

function JobApply() {
    const [pdf, setPdf] = useState('');

    function postJob(e) {
        e.preventDefault();
   
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const qualification = document.getElementById('qualification').value;
        const percentage = document.getElementById('percentage').value;
        const phoneno = document.getElementById('phoneno').value;
        const gender = document.getElementById('gender').value;
        const file = document.getElementById('file').value;

        const key = {
            fname: fname,
            lname: lname,
            dob: dob,
            address: address,
            phoneno: phoneno,
            qualification: qualification,
            percentage: percentage,
            gender: gender,
            file: file
        };

        axios.post('http://localhost:7000/app/v4/jobapply/post', key)
            .then((res) => {
                console.log(res.data);
            });
    }

    function handleFile(e) {
        console.log(e.target.files);
        setPdf(e.target.files[0]);
    }

    return (
        <StudDashboard><div className="container" style={{ background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', backgroundSize: '100% 100%' ,marginTop:'60px'}}>           
         <div className="S">
                <h2 className="heading" style={{ color: '#fff', textShadow: '2px 2px 4px #000' }}>Job Application</h2>
                <form onSubmit={postJob}> 
                    <div>
                        <label>First Name</label>
                        <input type='text' name='fname' id='fname' required />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' name='lname' id='lname' required />
                    </div>
                    <div>
                        <label>Date Of Birth</label>
                        <input type='date' name='dob' id='dob' required />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type='text' name='address' id='address' required />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type='text' name='phone' id='phoneno' required />
                    </div>
                    <div>
                        <label>Qualification</label>
                        <input type='text' name='qualification' id='qualification' required />
                    </div>
                    <div>
                        <label>Percentage</label>
                        <input type='text' name='percentage' id='percentage' required />
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type='text' name='gender' id='gender' required />
                    </div>
                    <label>Upload Resume</label>
                    <input type='file' name='file' id='file' onChange={handleFile} />
                    <input type='submit' value='Submit' style={{ background: '#fff', color: '#000' }} />
                </form>
            </div>
        </div>
        </StudDashboard>

    );
}

export default JobApply;
