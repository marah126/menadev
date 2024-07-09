import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import './App.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedInfo, setSubmittedInfo] = useState(null);

  const handleSubmit = () => {
    setSubmittedInfo({ name, email, message });
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-logo">Website Logo</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="container">
        <div className="sidebar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Conditionally render form on Home page */}
          {isHomePage && (
            <div>
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>

              {submittedInfo && (
                <div id="displayArea">
                  <h3>Entered Information:</h3>
                  <p><strong>Name:</strong> {submittedInfo.name}</p>
                  <p><strong>Email:</strong> {submittedInfo.email}</p>
                  <p><strong>Message:</strong> {submittedInfo.message}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
