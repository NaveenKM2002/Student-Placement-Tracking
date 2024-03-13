import React, { useState, useEffect } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import ResponsiveDrawer from '../DashBoard/dashboard';
import axios from 'axios';

const HelpSupport = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/app/v5/question')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSendQuestion = () => {
    if (question.trim() !== '') {
      // Send question logic goes here
      alert('Your message has been sent!');
      setQuestion('');
    } else {
      alert('Please enter your question before sending.');
    }
  };

  return (
    <ResponsiveDrawer>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', marginTop: '70px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Help and Support</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Frequently Asked Questions</h3>
            <p>Find answers to commonly asked questions here.</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>View FAQs</button>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Contact Support</h3>
            <p>Need further assistance? Contact our support team.</p>
            <div style={{ marginBottom: '10px' }}>
              <input type="text" placeholder="Enter your question" value={question} onChange={handleInputChange} />
              <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }} onClick={handleSendQuestion}>Send</button>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <FaQuestionCircle style={{ fontSize: '50px', color: '#007bff' }} />
        </div>
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Questions Asked by Students</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {questions.map((q, index) => (
              <li key={index} style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{q.question}</div>
                <div style={{ marginTop: '10px' }}>
                  <textarea style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }} placeholder="Your answer..."></textarea>
                  <button style={{ padding: '8px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Submit Answer</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ResponsiveDrawer>
  );
};

export default HelpSupport;
