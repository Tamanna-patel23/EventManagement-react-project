import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

function EventDetail() {
  const { id } = useParams();

  const events = [
    { id: 1, name: "Tech Conference 2025", date: "2025-09-15", location: "Delhi", description: "A conference about the latest in technology." },
    { id: 2, name: "Music Festival", date: "2025-10-10", location: "Mumbai", description: "Enjoy live music from top artists." },
    { id: 3, name: "Startup Meetup", date: "2025-11-05", location: "Bangalore", description: "Meet and network with startup founders." },
  ];

  const event = events.find(e => e.id.toString() === id);

  if (!event) return <h2>Event not found</h2>;

  return (
    <motion.div
      className="page-box"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{event.name}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <Link to="/events">← Back to Events</Link>
    </motion.div>

    
  );
}

export default EventDetail;
