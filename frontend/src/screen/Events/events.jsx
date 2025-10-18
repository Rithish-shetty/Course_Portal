import React, { useEffect, useState } from 'react';
import EventCard from '../../component/eventCard/eventCard';
import './events.css';
import Header from '../../component/header/header';
import Navigation from '../../component/navigation/navigation';
import axios from 'axios';
import Image from './event.webp'

const EventsPage = () => {

  const [events , setEvents] = useState([])

  useEffect(() => {
    axios.get(`https://course-portal-1-schk.onrender.com/getEvents`)
    .then(res => setEvents(res.data))
    .catch(err => console.log(err))
  } , [])

  return (
    <div>
        <Header />
        <Navigation />
    <div className="events-page-container">
      <h1>Upcoming Campus Events</h1>
      <div className="events-list">
        {events.map(event => (
          <EventCard
            key={event.id}
            eventName={event.name}
            scheduledDate={event.scheduledDate}
            managers={event.managers}
            description={event.description}
            imageUrl={Image}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventsPage;