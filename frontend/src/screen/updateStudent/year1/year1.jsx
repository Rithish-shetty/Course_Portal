import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Year from '../../../component/year/year';

const UpdateYear1Page = (props) => {

  return (
    <div >
      <Year yearName={"year1"} sem={"1 or 2"} />
    </div>
  );
};

export default UpdateYear1Page;