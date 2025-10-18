import React from 'react';
import './eventCard.css';
import { FaUserTie, FaCalendarAlt } from 'react-icons/fa'; // Import the calendar icon

const EventCard = ({ imageUrl, eventName, scheduledDate, managers, description }) => {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={eventName} className="event-card-image" />
      <div className="event-card-content">
        <h3 className="event-card-title">{eventName}</h3>
        
        {/* Date Display */}
        <div className="event-card-info">
          <FaCalendarAlt />
          <span>{scheduledDate}</span>
        </div>

        {/* Managers Display */}
        <div className="event-card-info">
          <FaUserTie />
          <span>{managers}</span>
        </div>
        
        <p className="event-card-description">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;