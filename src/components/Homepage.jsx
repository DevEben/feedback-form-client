import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="landing-page">
      <main className="main-content">
        <div className="text-section">
          <h1>WE WANT YOUR <span style={{ color: '#1E9FAB' }}>FEEDBACK</span></h1>
          <p>
          Your opinion matters to us! At our company, we believe that customer feedback is the cornerstone of continuous improvement and innovation. Whether it's praise or constructive criticism, your insights help us to refine our products and services to better meet your needs. Join our community of engaged users and share your experiences, so we can grow together and achieve excellence. Thank you for being an integral part of our journey!
          </p>
          <button className="read-more-btn" >
            <Link to="/feedback" className="read-more-btn">
            Add Feedback <FaArrowRight />
            </Link>
          </button>
        </div>
        <div className="image-section">
          <img src="../../hero-image.png" alt="Feedback" />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
