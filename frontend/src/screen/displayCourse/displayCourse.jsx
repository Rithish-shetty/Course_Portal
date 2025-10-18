import React, { useEffect, useState } from "react";
import axios from "axios";
import Table2 from "../../component/table2/table2";

const DisplayCourse = () => {

    const [data , setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getCourse')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Table2 heading="Course Update Page" name="Course Name" number="Course Code" data={data} />
        </div>
    )
}

export default DisplayCourse;