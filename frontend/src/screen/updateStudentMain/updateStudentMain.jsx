import React, { useState, useEffect } from "react";
import DataTablePage from "../../component/table/table";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateStudentMain = () => {
  const { year, b } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getStudents/${year}/${b}`)
      .then((res) => {
        console.log("Fetched data:", res.data);
        setData(res.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [year, b]);

  return <DataTablePage name="Name" namee={"studentName"} number="Reg Number" data={data} />;
};

export default UpdateStudentMain;
