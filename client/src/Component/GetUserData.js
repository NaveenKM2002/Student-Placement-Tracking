import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function GetUserData() {

    const nav =useNavigate()

  function PostData(e) {
    e.preventDefault();

    let Name = document.getElementById("name").value;
    let Age = document.getElementById("age").value;
    let Id = document.getElementById("id").value;

    let key = {
      name: Name,
      age: Age,
      id: Id,
    };

    axios.post("http://localhost:7000/app/v1/emp/post", key).then((res) => {
      console.log(res.data);
      if (res.data.msg === "success") {
        alert("Values are submitted");
        // window.location.assign("/data");
        nav('/data')
      } else {
        alert("Values are not submitted");
      }
    });
  }

  return (
    <>
      <form onSubmit={PostData}>
        <input type="text" id="name" />
        <input type="number" id="age" />
        <input type="number" id="id" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default GetUserData;
