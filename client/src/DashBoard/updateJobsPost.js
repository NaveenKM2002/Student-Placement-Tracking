import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResponsiveDrawer from './dashboard'

function UpdateJobsPost() {

    const {id}=useParams()

    const [role,setRole]=useState('')
    const [qualification,setQualification]=useState("")
    const [salary,setSalary]=useState("")
    const [address,setAddress]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:7000/app/v3/job/${id}`)
        .then(res=>{
            // console.log(res.data);
            setRole(res.data.role)
            setQualification(res.data.qualification);
            setSalary(res.data.salary)
            setAddress(res.data.address)
        })
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()

        let key={
            role:role,
            qualification:qualification,
            salary:salary,
            address:address
        };
        axios.patch(`http://localhost:7000/app/v3/job/${id}`,key)
        .then(res=>{
            console.log(res);
            if(res.data.msg === "success"){
                alert('values are updated')
                window.location.assign('/jobs')
            }else{
                alert('values are not updated')
            }
        })

    }

  return (
   <>
   <ResponsiveDrawer>
    <div className=''>
        <form onSubmit={handleSubmit}>
           Role: <input type='text' onChange={(e)=>setRole(e.target.value)} id='name' value={role}/><br></br>
           Highest Qulaification:<input type='text' onChange={(e)=>setQualification(e.target.value)} id='age' value={qualification}/> <br></br>
            Salary:<input type='text' onChange={(e)=>setSalary(e.target.value)} id='course' value={salary}/> <br></br>
            Address:<input type='text' onChange={(e)=>setAddress(e.target.value)} id='course' value={address}/> <br></br>
            <input type='submit' value="Submit"/> <br></br>
        </form>
    </div>
    </ResponsiveDrawer>
   </>
  )
}

export default UpdateJobsPost