import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import "./Students.css";
import ResponsiveDrawer from "./dashboard";

function Students() {
    const [user, setUser] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
      axios.get("http://localhost:7000/app/v2/reg/get")
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
    }, []);

    const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
    };

    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

    function del(a) {
      //   axios.delete(`http://localhost:7000/app/v2/reg/${a}`)
      //     .then(res => {
      //       console.log(res.data);
      //       if (res.data.msg === 'deleted') {
      //         alert("Deleted Successfully")
      //       } else {
      //         alert("Data's are removed")
      //       }
      //     })
    }

  return (
    <>
    <ResponsiveDrawer>
      <div className="" style={{marginTop:'70px'}}>
    <div className="container">
      <div className="water-drops"></div>
      <table className="table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Student Name</th>
            <th>Student email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((e) => (
            <tr key={e._id}>
              <td>{e.role}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>
                <button className="btn btn-danger" onClick={() => del(e._id)}>Delete</button>
                <Link to={`/update/${e._id}`} className="btn btn-success">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="pagination-container ">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={user.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
    </div>
    </ResponsiveDrawer>
    </>
  )
}

export default Students;
