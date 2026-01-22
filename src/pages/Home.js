import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>🎉 Welcome to EventHub</h1>
        <p>Discover and book tickets for your favorite events with ease.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="explore-btn"
        >
          Explore Events
        </motion.button>
      </motion.div>

      {/* Event Boxes Section */}
      <div className="event-highlights">
        {/* Event 1 */}
        <motion.div
          className="event-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://source.unsplash.com/400x250/?ipl,cricket"
            alt="IPL Event"
          />
          <h3>Indian Premier League</h3>
          <p>📍 Mumbai, India</p>
          <p>💰 ₹1500</p>
          <button className="book-btn">Book Ticket</button>
        </motion.div>

        {/* Event 2 */}
        <motion.div
          className="event-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://source.unsplash.com/400x250/?women,cricket"
            alt="WPL Event"
          />
          <h3>Women Premier League</h3>
          <p>📍 Delhi, India</p>
          <p>💰 ₹1200</p>
          <button className="book-btn">Book Ticket</button>
        </motion.div>

        {/* Event 3 */}
        <motion.div
          className="event-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://source.unsplash.com/400x250/?stadium,cricket"
            alt="GPL Event"
          />
          <h3>Gokuldham Premier League</h3>
          <p>📍 Ahmedabad, India</p>
          <p>💰 ₹1000</p>
          <button className="book-btn">Book Ticket</button>
        </motion.div>
      </div>
      
    </div>
     
  );
}

export default Home;
