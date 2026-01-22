import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      {/* 🔹 Stylish Intro Section */}
      <section className="about-intro">
        <div className="about-box">
          <h1>Who We Are</h1>
          <p>
            We bring people together through unforgettable sports, music, and cultural events.  
            Our mission is to create experiences that inspire, connect, and celebrate life.  
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>🎶 500+ Events</h3>
            <p>From concerts to leagues, we’ve managed them all.</p>
          </div>
          <div className="highlight-card">
            <h3>🌍 20+ Cities</h3>
            <p>We’ve expanded across major Indian cities.</p>
          </div>
          <div className="highlight-card">
            <h3>⭐ Trusted by 50k+</h3>
            <p>Thousands of happy customers booking with us.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To make event booking seamless and enjoyable by connecting people with 
          their favorite sports leagues, concerts, and shows.
        </p>
      </section>

      {/* 🔹 Vision Section */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become the most trusted platform for event enthusiasts by offering 
          transparent pricing, smooth booking, and world-class experiences.
        </p>
      </section>

            {/* 🔹 Events Gallery (instead of team photos) */}
      <section className="about-section">
        <h2>Our Events Gallery</h2>
        <div className="team">
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b" 
              alt="Cricket Event" 
            />
            <h3>Indian Premier League</h3>
            <p>Exciting cricket matches across India</p>
          </div>

          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1518972559570-0a555c0d3c69" 
              alt="Concert Event" 
            />
            <h3>Live Concerts</h3>
            <p>Music festivals & international performances</p>
          </div>

          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f" 
              alt="Cultural Event" 
            />
            <h3>Cultural Shows</h3>
            <p>Drama, dance & traditional art programs</p>
          </div>

          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d" 
              alt="Football Event" 
            />
            <h3>Football League</h3>
            <p>Exciting matches with global teams</p>
          </div>

          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30" 
              alt="Theater Event" 
            />
            <h3>Theater Nights</h3>
            <p>Classic plays and modern performances</p>
          </div>

          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf" 
              alt="College Fest" 
            />
            <h3>College Festivals</h3>
            <p>Youth events full of energy and talent</p>
          </div>

          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1515162305286-9a79c8b3d6c5" 
              alt="Food Festival" 
            />
            <h3>Food Festivals</h3>
            <p>Celebrating flavors & cuisines of India</p>
          </div>

          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" 
              alt="Marathon Event" 
            />
            <h3>Marathons</h3>
            <p>Run for health, charity & community spirit</p>
          </div>
        </div>
      </section>


      {/* 🔹 Why Choose Us Section */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Hassle-free booking process</li>
          <li>✔ Wide range of events</li>
          <li>✔ Secure payment gateway</li>
          <li>✔ Customer support 24/7</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
