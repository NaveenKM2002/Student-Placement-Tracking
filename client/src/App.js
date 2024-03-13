import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GetUserData from "./Component/GetUserData";
import UserData from "./Component/UserData";
import UpdateData from "./Component/UpdateData";
import BasicExample from "./Component/Direct";
import LoginScreen from "./LoginPage/LoginScreen";
import RegisterScreen from "./RegisterPage/RegisterScreen";
import StudentDashboard from "./LoginPage/StudentDashboard";
import ResponsiveDrawer from "./DashBoard/dashboard";
// import JobApply from "./StudentDashboard/JobApply";
import StudDashboard from "./StudentDashboard/StudDashboard";
import Jobs from "./DashBoard/Jobs";
import StudentProfile from "./StudentDashboard/StudentProfile";
import Home1 from "./DashBoard/Home1";
import Students from "./DashBoard/Students";
import InterviewScheduler from "./DashBoard/InterviewSchedular";
import JobApplication from "./DashBoard/JobApplicationsList";
import JobReport from "./DashBoard/JobReport";
import HelpSupport from "./LoginPage/HelpSupport";
import Logout from "./DashBoard/Logout";
import Home2 from './StudentDashboard/Home2';
// import StudentProfile from './StudentProfile';
import JobPostings from "./StudentDashboard/JobPostings"
import JobApply from "./StudentDashboard/JobApply"
import JobStatus from "./StudentDashboard/JobStatus"
import Help from "./StudentDashboard/Help"
import Contact from "./Component/Contact";
import LogoutStud from "./StudentDashboard/LogoutStud";
import Main from "./Component/Main"
import UpdateJobsPost from "./DashBoard/updateJobsPost";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <BasicExample /> */}
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/' element={<Main/>}/>
          {/* <Route path='/' element={<BasicExample/>}/> */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/reg" element={<RegisterScreen />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/userEntry" element={<GetUserData />} />
          <Route path="/data" element={<UserData />} />
          <Route path="/update/:sid" element={<UpdateData />} />
          <Route path='/dashboard' element={<ResponsiveDrawer />} />
          <Route path='/studdashboard/:id' element={<StudDashboard />} />
          <Route path='/profile' element={<StudentProfile />} />
          <Route exact path='/home1' element={<Home1 />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/students-list' element={<Students />} />
          <Route path='/interview' element={<InterviewScheduler />} />
          <Route path='/joblist' element={<JobApplication />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/help' element={<HelpSupport />} />
          <Route path="/studdashboard/" element={<Home2 />} />
          <Route path="/student/profile/:id" element={<StudentProfile />} />
          <Route path="/student/jobposting" element={<JobPostings />} />
          <Route path="/student/Application" element={<JobApply />} />
          <Route path="/student/status" element={<JobStatus />} />
          <Route path="/student/help" element={<Help />} />
          <Route path="/student/logout" element={<LogoutStud />} />
          <Route path="/updatejob/:id" element={<UpdateJobsPost/>}/>

        </Routes>
        {/* <Route path='/jobs' element={<Jobs/>} /> */}
        {/* <ResponsiveDrawer/> */}
        {/* <StudDashboard/> */}
      </BrowserRouter>
      {/* <JobApply/> */}
    </>
  );
}

export default App;



// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import LoginScreen from './LoginPage/LoginScreen';
// import ResponsiveDrawer from './DashBoard/dashboard';
// import PrivateRoute from './LoginPage/PrivateRoute';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<LoginScreen  />} />
//         {/* <PrivateRoute isAuthenticated={isAuthenticated} path="/dashboard" element={<ResponsiveDrawer />} /> */}
//         <Route path="/dashboard" element={<PrivateRoute isAuthenticated={isAuthenticated}><ResponsiveDrawer /></PrivateRoute>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


