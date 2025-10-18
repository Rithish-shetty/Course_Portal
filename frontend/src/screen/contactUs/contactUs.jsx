import React from 'react';
import './contactUs.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Header from '../../component/header/header';
import Navigation from '../../component/navigation/navigation';

const ContactUsPage = () => {

  return (
    <div>
        <Header to="/admin" buttonName = {"Admin Panel"} />
        <Navigation />
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-body">
        <div className="contact-details-section">
          <h2>Contact Information</h2>
          <p>Reach out to us directly for any immediate assistance.</p>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt />
              <span>Srinivas University, City Campus, Pandeshwar, Mangaluru, Karnataka 575001</span>
            </li>
            <li>
              <FaPhone />
              <span>+91 824 242 5966</span>
            </li>
            <li>
              <FaEnvelope />
              <span>info@srinivasuniversity.edu.in</span>
            </li>
          </ul>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.324227361498!2d74.83495807481546!3d12.887201887417533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c337ab153%3A0x22629b3513a0e71d!2sSrinivas%20University%20-%20City%20Campus%2C%20Pandeshwar!5e0!3m2!1sen!2sin!4v1696482613014!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Srinivas University Pandeshwar Campus Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsPage;