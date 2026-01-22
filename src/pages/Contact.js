import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have questions or want to book your next event with us? 
        Get in touch and we’ll be happy to help!
      </p>

      <div className="contact-wrapper">
        {/* Left Side Info */}
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>📍 123 Event Street, Mumbai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@eventify.com</p>

          <h2>Follow Us</h2>
          <p>🌐 Facebook | Instagram | Twitter</p>

          {/* Map Embed */}
          <div className="map-container">
            <iframe
              title="office-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609909253!2d72.74109981099385!3d19.082197839591553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f1b4fb11b%3A0xdeb6d09adbbb44ab!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

