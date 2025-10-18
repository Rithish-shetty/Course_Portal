import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screen/home/home';
import Browse from './screen/browse/browse';
import Contact from './screen/contact/contact';
import CourseDetailPage from './screen/courseDetailPage/courseDetailPage';
import Form from './screen/form/form';
import Support from './screen/support/support';
import EventsPage from './screen/Events/events';
import ProfilePage from './screen/profile/profile';
import ContactUsPage from './screen/contactUs/contactUs';
import AdminHomePage from './screen/Admin/admin';
import AddStudentPage from './screen/addStudent/addStudent';
import UpdateStudentPage from './screen/updateStudent/updateStudent';
import UpdateYear1Page from './screen/updateStudent/year1/year1';
import UpdateYear2Page from './screen/updateStudent/year2/year2';
import UpdateYear3Page from './screen/updateStudent/year3/year3';
import AddCoursePage from './screen/addCourse/addCourse';
import AddEventPage from './screen/addEvent/addEvent';
import AnnouncementsPage from './screen/announcements/announcements';
import AdminSupportPage from './screen/studentSupport/studentSupport';
import MessagesPage from './screen/courseForm/courseForm';
import DisplayCourse from './screen/displayCourse/displayCourse';
import DisplayStudent from './screen/displayStudent/displayStudent';
import UpdateStudentMain from './screen/updateStudentMain/updateStudentMain';
import StudentUpdation from './screen/studentUpdation/studentUpdation';
import CourseUpdation from './screen/courseUpdation/courseUpdation';
import AdminLogin from './screen/login/AdminLogin';
import StudentLogin from './screen/login/studentLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courseDetailPage/:id" element={<CourseDetailPage />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="/support" element={<Support />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile/:reg" element={<ProfilePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/addStudent" element={<AddStudentPage />} />
        <Route path="/admin/updateStudent" element={<UpdateStudentPage />} />
        <Route path="/admin/updateStudent/year1" element={<UpdateYear1Page />} />
        <Route path="/admin/updateStudent/year2" element={<UpdateYear2Page />} />
        <Route path="/admin/updateStudent/year3" element={<UpdateYear3Page />} />
        <Route path="/admin/addCourse" element={<AddCoursePage />} />
        <Route path="/admin/addEvent" element={<AddEventPage />} />
        <Route path="/admin/announcements" element={<AnnouncementsPage />} />
        <Route path="/admin/support" element={<AdminSupportPage />} />
        <Route path="/admin/messages" element={<MessagesPage />} />
        <Route path="/admin/displayCourse" element={<DisplayCourse />} />
        <Route path="/admin/displayStudent" element={<DisplayStudent />} />
        <Route path="/admin/updateStudent/updateStudentMain/:year/:b" element={<UpdateStudentMain />} />
        <Route path="/admin/studentUpdation/:id" element={<StudentUpdation />} />
        <Route path="/admin/courseUpdation/:id" element={<CourseUpdation />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
      
      </Routes>
    </Router>
  );
}

export default App;
