import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import Navigation from "../../component/navigation/navigation";
import CourseCard from "../../component/course/course";
import "./browse.css";
import axios from "axios";

const Browse = () => {

  const [data , setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/getCourse`)
    .then(res => setData(res.data))
    .catch(err => {console.log(err)})
  })

  return (
    <div>
        <Header to="/admin" buttonName = {"Admin Panel"} />
        <Navigation />
        <div className="courses-grid">
          {data.map((item) => {
            return (
          <CourseCard name={item.name} description={item.description} id={item._id} className="course-card" />
           )}
           )}
          </div>
    </div>
  );
}

export default Browse;