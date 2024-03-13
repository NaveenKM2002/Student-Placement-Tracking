import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {Outlet, Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import '../style/direct.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function BasicExample() {
  return (
    // <div className=''> 
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <Link className="navbar-brand" to="#">Navbar</Link>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Nav.Link as={Link} to='/' target="_blank">Home</Nav.Link>
    //           </li>
    //           <li className="nav-item">
    //             <Nav.Link as={Link} to='/login' target="_blank">Login</Nav.Link>
    //           </li>
    //           <li className="nav-item">
    //             <Nav.Link as={Link} to='/reg' target="_blank">Register</Nav.Link>
    //           </li>
    //           <li className="nav-item">
    //             <Nav.Link as={Link} to='/student' target="_blank">Student Dashboard</Nav.Link>
    //           </li>
    //         </ul>
    //         <div className="navbar-icons">
    //           <FaInstagram className="navbar-icon" />
    //           <FaFacebook className="navbar-icon" />
    //           <FaMapMarkerAlt className="navbar-icon" />
    //           <FaLinkedin className="navbar-icon" />
    //           {/* Add more icons as needed */}
    //         </div>
    //         <form className="d-flex">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form>
    //       </div>
    //     </div>  
    //   </nav> 
    //   <div className='bag'></div>
    // </div>
    <div className=''>
        <nav class="navbar navbar-expand-xl navbar-dark bg-light">
            <div class="container-fluid ">
                <a class="navbar-brand text-dark" href="#"><img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirgmm-IHn1JPTF-tqllTvqTucX4-Dre3rWA&usqp=CAU" style={{height: 70}}/> </a>
                <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-dark"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                        <    Link to="/" style={{color:"black", textDecoration:"none"}} className="m-5 p-3">Home</Link>                  </li>
                  <li class="nav-item">
                   <Link to="/blog" className="m-3 p-3" style={{color:"black", textDecoration:"none"}}>Problems</Link>
                  </li>
                  <li class="nav-item">
                   <Link to="/contact" className="m-3 p-3" style={{color:"black", textDecoration:"none"}}>Contact</Link>
                  </li>
                  <li class="nav-item">
                    <Link to={'/login'}
                    
  className="m-3 p-3" style={{color:"black", textDecoration:"none"}}>Login</Link>
                    </li>                
                </ul>
              </div>
              <div class="col-5 m-2 p-2 text-end">

                        <a class="m-1" style={{ color: "darkblue", justifyContent: "end" }} href="" bac><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="m-1" style={{ color: "blue" }} href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="m-1" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class=" m-1 text-danger" style={{ borderRadius: 10, }} href=""><FontAwesomeIcon icon={faYoutube} /></a>
                        <a class="m-1 text-danger " href=""><FontAwesomeIcon icon={faInstagram} /></a>

                    </div>
            </div>  
            </nav>
            
           

        <Outlet/>
        </div>
  );
}

export default BasicExample;
