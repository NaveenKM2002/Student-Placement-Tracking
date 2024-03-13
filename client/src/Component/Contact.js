import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import StudDashboard from '../StudentDashboard/StudDashboard';

function Contact() {
  return (
    <StudDashboard>
    <div className="container-fluid bg-dark text-light py-5">
      <div className="row">
        <div className="col-lg-4 mb-5">
          <h3 className="mb-4">Student Placement Portal</h3>
          <p>Connect with us:</p>
          <div className="d-flex">
            <a className="me-2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a className="me-2" target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="me-2" target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="me-2" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="col-lg-4 mb-5">
          <h3 className="mb-4">Job Portals and IT Companies</h3>
          <p>Explore opportunities on these platforms:</p>
          <ul className="list-unstyled">
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.naukri.com/">Naukri</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.monsterindia.com/">Monster India</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/jobs/">LinkedIn Jobs</a></li>
          </ul>
          <p>Discover more about IT companies:</p>
          <ul className="list-unstyled">
            <li><strong>Infosys:</strong> Bangalore, Karnataka</li>
            <li><strong>TCS:</strong> Bangalore, Karnataka</li>
            <li><strong>Accenture:</strong> Bangalore, Karnataka</li>
            <li><strong>Capgemini:</strong> Bangalore, Karnataka</li>
            <li><strong>Google:</strong> Bangalore, Karnataka</li>
          </ul>
        </div>
        <div className="col-lg-4 mb-5">
          <h3 className="mb-4">Contact Us</h3>
          <p>Have questions or need assistance?</p>
          <p>Reach out to us:</p>
          <p>Email: info@placementportal.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
      </div>
    </div>
    </StudDashboard>
  );
}

export default Contact;
