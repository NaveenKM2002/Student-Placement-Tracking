import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div style={styles.container}>
      <div style={styles.background}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to our Website</h1>
        <div style={styles.buttons}>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/reg" style={styles.button}>Register</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('https://img.freepik.com/free-photo/co-workers-reviewing-reports_1098-558.jpg?size=626&ext=jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(5px)',
    zIndex: -1,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#fff',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'background-color 0.3s ease',
  },
};

export default Main;
