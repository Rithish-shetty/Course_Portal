import React, { useEffect, useState } from 'react';
import './studentSupport.css';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const AdminSupportPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/getTicket`)
    .then(res => setTickets(res.data))
    .catch(err => console.log(err))
  })

  const handleMarkAsDone = (ticketId) => {
    axios.delete(`http://localhost:3001/deleteTicket/${ticketId}`)
      .then(() => setTickets(tickets.filter(ticket => ticket.id !== ticketId)))
      .catch(err => console.log(err))
  };

  return (
    <div className="admin-support-container">
      <h1>Student Support Tickets</h1>
      <p className="page-description">
        Review and resolve pending support requests from students.
      </p>

      <div className="ticket-list">
        {tickets.length > 0 ? (
          tickets.map(ticket => (
            <div key={ticket._id} className="ticket-card">
              <div className="ticket-header">
                <span className="ticket-category">{ticket.category}</span>
                <h3 className="ticket-subject">{ticket.subject}</h3>
              </div>
              <p className="ticket-description">{ticket.description}</p>
              <button
                className="done-button"
                onClick={() => handleMarkAsDone(ticket._id)}
              >
                <FaCheckCircle /> Mark as Done
              </button>
            </div>
          ))
        ) : (
          <div className="no-tickets-message">
            <h3>All support tickets have been resolved! 🎉</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSupportPage;