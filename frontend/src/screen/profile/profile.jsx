import React, { useEffect, useState } from 'react';
import StudentProfile from '../../component/studentProfile/studentProfile';
import Header from '../../component/header/header';
import Navigation from '../../component/navigation/navigation';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {

  const [data , setData] = useState([])

  const {reg} = useParams()
  console.log(reg)

  console.log("st data" , data.S1t1)

  useEffect(() => {
    axios.get(`http://localhost:3001/getStudent/${reg}`)
    .then(res => setData(res.data) )
    .catch(err => console.log(err))
  }, [reg])

  return (
    <div>
        <Header />
        <Navigation />
      <StudentProfile name={data.studentName} registerNumber={data.registerNumber} courseName={data.courseName}
      S1t1={data.S1t1} S1t2={data.S1t2} S1sgpa={data.S1sgpa} S1cgpa={data.S1cgpa}
      S2t1={data.S2t1} S2t2={data.S2t2} S2sgpa={data.S2sgpa} S2cgpa={data.S2cgpa}
      S3t1={data.S3t1} S3t2={data.S3t2} S3sgpa={data.S3sgpa} S3cgpa={data.S3cgpa}
      S4t1={data.S4t1} S4t2={data.S4t2} S4sgpa={data.S4sgpa} S4cgpa={data.S4cgpa}
      S5t1={data.S5t1} S5t2={data.S5t2} S5sgpa={data.S5sgpa} S5cgpa={data.S5cgpa}
      S6t1={data.S6t1} S6t2={data.S6t2} S6sgpa={data.S6sgpa} S6cgpa={data.S6cgpa}
      />
    </div>
  );
};

export default ProfilePage;