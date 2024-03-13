import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserData() {
  const [user, setUser] = useState([]);

  function del(a){
    axios.delete(`http://localhost:7000/app/v1/emp/${a}`)
    .then(res=>{
        console.log(res.data);
        if(res.data.msg === 'deleted'){
            alert("Deleted Successfully")
        }
        else{
            alert("Data's are removed")
        }
    })
  }

  useEffect(
    () => {
      axios.get("http://localhost:7000/app/v1/emp")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
    },
    []
  );

  return (
    <div>
      {
      user.map((e) => {
        return (
          <div className="text-center ">
            <h1>{e.name}</h1>
            <h2>{e.age}</h2>
            <button className="btn btn-danger" onClick={()=>del(e._id)} >Delete</button>
            <Link to={`/update/${e._id}`} className="btn btn-success" >Update</Link>
          </div>
        );
      })
      }
    </div>
  );
}

export default UserData;
