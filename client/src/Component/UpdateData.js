import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateData() {

  const { sid } = useParams();
  const nav = useNavigate();

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Id, setId] = useState("");

  function PostData(e) {
    e.preventDefault();
    
    let key = {
      name: Name,
      age: Age,
      id: Id,
    };
    // console.log(key);

    axios.patch(`http://localhost:7000/app/v1/emp/${sid}`, key).then((res) => {
      console.log(res.data);
      if (res.data.msg === "updated") {
        alert("Values Updated");
        nav("/data");
      } else {
        alert("Not Updated");
      }
    });
  }

  useEffect(() => {
    axios.get(`http://localhost:7000/app/v1/emp/${sid}`).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setAge(res.data.age);
      setId(res.data.id);
    });
  }, []);

  return (
    <>
      <form onSubmit={PostData}>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
        <input
          type="number"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
          id="age"
        />
        <input
          type="number"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          id="id"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default UpdateData;
