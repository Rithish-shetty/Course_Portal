import React, { useState } from 'react';
import './support.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Header from '../../component/header/header';
import Navigation from '../../component/navigation/navigation';
import axios from 'axios';

// AccordionItem component for the FAQ section
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const Support = () => {
  const [ticketData, setTicketData] = useState({
    category: '',
    subject: '',
    description: ''
  });

  const handleTicketChange = (e) => {
    const { name, value } = e.target;
    setTicketData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    axios.post('https://course-portal-1-schk.onrender.com/createSupportTicket', ticketData)
  
    console.log("Support Ticket Submitted:", ticketData);
    alert("Your support ticket has been submitted successfully!");
    setTicketData({ category: '', subject: '', description: '' });
  };

  return (
    <div>
        <Header />
        <Navigation />
    <div className="support-container">
      <h1>Student Support Center</h1>
      <p className="support-intro">
        Find answers to your questions, get in touch with the right department, or submit a support ticket.
      </p>

      <div className="support-layout">
        {/* ## Left Column: FAQs and Contacts */}
        <div className="support-main">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <div className="faq-accordion">
            <AccordionItem
              question="How do I reset my portal password?"
              answer="To reset your password, please visit the IT Help Desk on the ground floor of the administrative block with your student ID card."
            />
            <AccordionItem
              question="When is the last date for fee payment?"
              answer="The last date for fee payment for the current semester is October 15, 2025. Please check the 'Fee Payment' section for more details."
            />
            <AccordionItem
              question="How can I apply for a bonafide certificate?"
              answer="You can apply for a bonafide certificate through the student services section of this portal or by visiting the admissions office."
            />
          </div>

          <h2>Contact Information</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Admissions Office</h3>
              <p>For queries related to admissions, certificates, and documentation.</p>
              <span>📧 admissions@srinivasuniversity.edu.in</span>
            </div>
            <div className="contact-card">
              <h3>Examination Cell</h3>
              <p>For all queries regarding exam schedules, results, and re-evaluation.</p>
              <span>📧 exams@srinivasuniversity.edu.in</span>
            </div>
          </div>
        </div>

        {/* ## Right Column: Support Ticket Form */}
        <aside className="support-sidebar">
          <div className="ticket-form-container">
            <h3>Submit a Support Ticket</h3>
            <form onSubmit={handleTicketSubmit} className="ticket-form">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={ticketData.category} onChange={handleTicketChange} required>
                  <option value="" disabled>Select a category</option>
                  <option value="academic">Academic</option>
                  <option value="technical">Technical Issue</option>
                  <option value="fees">Fee Payment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={ticketData.subject} onChange={handleTicketChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description of Issue</label>
                <textarea id="description" name="description" rows="6" value={ticketData.description} onChange={handleTicketChange} required></textarea>
              </div>
              <button type="submit" className="submit-ticket-btn">Submit Ticket</button>
            </form>
          </div>
        </aside>
      </div>
    </div>
    </div>
  );
};

export default Support;