import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import StudDashboard from "./StudDashboard";

function StudentProfile() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const [image, setImage] = useState(null);

  let _id = id.slice(1);

  useEffect(() => {
    axios.get(`http://localhost:7000/app/v2/reg/${_id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [_id]);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = async () => {
    if (!image) {
      console.error("No image selected.");
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', image);

    try {
      await axios.put(`http://localhost:7000/app/v2/reg/${_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Fetch updated user data after image upload
      const updatedUserData = await axios.get(`http://localhost:7000/app/v2/reg/${_id}`);
      setUser(updatedUserData.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <StudDashboard>
      <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", marginTop: '50px' }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={user.profileImage || "placeholder.png"}
            alt="Profile"
            style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "2px solid #333" }}
          />
          <input type="file" onChange={handleImageChange} />
          <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px", marginLeft: "10px" }} onClick={handleImageUpload}>Upload Image</button>
        </div>
        <div>
          <h1 style={{ color: "#333", textAlign: "center" }}>{user.name}</h1>
          <div style={{ backgroundColor: "#e9e9e9", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
            <p style={{ margin: 0 }}>Email: {user.email}</p>
          </div>
          {/* Add more details button */}
          <button style={{ backgroundColor: "#28a745", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "5px", cursor: "pointer" }}>Add More Details</button>
        </div>
      </div>
    </StudDashboard>
  );
}

export default StudentProfile;
