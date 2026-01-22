import React, { useState } from "react";
import "./Events.css";

const eventsData = [
  {
    id: 1,
    name: "Indian Premier League",
    location: "Mumbai Stadium",
    date: "2025-03-15",
    price: 1200,
    image: "https://via.placeholder.com/300x180?text=IPL+2025"
  },
  {
    id: 2,
    name: "Women Premier League",
    location: "Delhi Stadium",
    date: "2025-04-10",
    price: 800,
    image: "https://via.placeholder.com/300x180?text=WPL+2025"
  },
  {
    id: 3,
    name: "Gokuldham Premier League",
    location: "Ahmedabad Ground",
    date: "2025-05-05",
    price: 500,
    image: "https://via.placeholder.com/300x180?text=GPL+2025"
  }
];

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tickets, setTickets] = useState(1);

  const handleBook = (event) => {
    setSelectedEvent(event);
    setTickets(1);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  const totalPrice = selectedEvent ? tickets * selectedEvent.price : 0;

  return (
    <div className="events-page">
      <h2>Our Events</h2>
      <div className="events-grid">
        {eventsData.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>📍 {event.location}</p>
            <p>📅 {event.date}</p>
            <p>💰 ₹{event.price}</p>
            <button onClick={() => handleBook(event)}>Book Ticket</button>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedEvent.name}</h2>
            <p>Location: {selectedEvent.location}</p>
            <p>Date: {selectedEvent.date}</p>
            <p>Price per ticket: ₹{selectedEvent.price}</p>

            <label>
              Number of Tickets:{" "}
              <input
                type="number"
                value={tickets}
                min="1"
                onChange={(e) => setTickets(parseInt(e.target.value))}
              />
            </label>

            <h3>Total: ₹{totalPrice}</h3>

            <button onClick={handleClose}>Close</button>
            <button onClick={() => alert(`Booked ${tickets} tickets for ${selectedEvent.name}!`)}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
