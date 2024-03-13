import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook
import StudDashboard from './StudDashboard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const [question, setQuestion] = useState('');
  // const history = useHistory(); // Get history object from React Router
  const nav=useNavigate();
  const handleQuestionSubmit = () => {
    // Get the value of the textarea
    const questionValue = document.getElementById('question').value;

    // Implement question submit logic using axios or other libraries
    axios.post('http://localhost:7000/app/v5/post/question', { question: questionValue })
      .then(res => {
        if (res.data.msg === "success") {
          alert('Question sent successfully!');
          // Clear the textarea after successful submission
          setQuestion('');
        } else {
          alert('Failed to send question. Please try again.');
        }
      })
      .catch(err => {
        console.error('Error sending question:', err);
        alert('Failed to send question. Please try again.');
      });
  };

  // Function to navigate to the contact page
  const handleContactSupportClick = () => {
    nav('/contact')// Navigate to the /contact page
  };
//Student Dashboard
  return (
    <StudDashboard>
      <div className="profile-container" style={styles.container}>
        <div style={styles.section}>
          <h2 style={styles.title}>Help and Support</h2>
          <div className="content" style={styles.content}>
            <div className="section">
              <h3 className="section-title" style={styles.sectionTitle}>Frequently Asked Questions</h3>
              <p>Find answers to commonly asked questions here.</p>
              <button className="btn" style={styles.button}>View FAQs</button>
            </div>
            <div className="section">
              <h3 className="section-title" style={styles.sectionTitle}>Contact Support</h3>
              <p>Need further assistance? Contact our support team.</p>
              <button className="btn" onClick={handleContactSupportClick} style={styles.button}>Contact Support</button>
            </div>
          </div>
          <div className="question-container" style={styles.questionContainer}>
            <textarea
              id='question'
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              style={styles.textarea}
            ></textarea>
            <button className="btn" onClick={handleQuestionSubmit} style={styles.submitButton}>Submit Question</button>
          </div>
        </div>
        <div className="icon-container" style={styles.iconContainer}>
          <FaQuestionCircle className="help-icon" style={styles.icon} />
        </div>
      </div>
    </StudDashboard>
  );
};

// Styles object remains the same
const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
    position: "relative",
    overflow: "hidden",
  },
  section: {
    width: "100%",
  },
  title: {
    margin: 0,
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "24px",
    color: "#333",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  sectionTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#555",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  questionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    width: "100%",
    height: "100px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "none",
    padding: "10px",
  },
  submitButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  iconContainer: {
    position: "absolute",
    top: "20px",
    right: "20px",
    transform: "rotate(15deg)",
  },
  icon: {
    fontSize: "80px",
    color: "#007bff",
    opacity: "0.3",
    transition: "transform 0.5s ease",
  },
  iconHover: {
    transform: "rotate(360deg)",
  }
}

export default Help;
