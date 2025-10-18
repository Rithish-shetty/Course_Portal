import React, { useEffect, useState } from 'react';
import './courseForm.css';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`https://course-portal-1-schk.onrender.com/getForm`)
    .then(res => setMessages(res.data))
    .catch(err => console.log(err))
  })

  const handleDelete = (messageId) => {
    axios.delete(`https://course-portal-1-schk.onrender.com/deleteForm/${messageId}`)
    .then(() =>   setMessages(messages.filter(msg => msg.id !== messageId)))
    .catch(err => console.log(err) )
    
  };

  return (
    <div className="messages-container">
      <h1>Contact Form Messages</h1>
      <p className="page-description">
        View and manage inquiries sent by visitors through the contact form.
      </p>

      <div className="message-list">
        {messages.length > 0 ? (
          messages.map(msg => (
            <div key={msg._id} className="message-card">
              <div className="sender-details">
                <h3>{msg.name}</h3>
                <p><strong>Email:</strong> <a href={`mailto:${msg.email}`}>{msg.email}</a></p>
                <p><strong>Contact:</strong> {msg.number}</p>
                <p><strong>State:</strong> {msg.state}</p>
              </div>

              <button onClick={() => handleDelete(msg._id)} className="delete-message-btn">
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <div className="no-messages">
            <h3>No new messages. Inbox is clear! ✅</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;