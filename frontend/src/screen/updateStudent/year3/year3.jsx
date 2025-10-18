import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Year from '../../../component/year/year';

const UpdateYear3Page = (props) => {

  return (
    <div >
      <Year yearName={"year3"} sem={"5 and 6"} />
    </div>
  );
};

export default UpdateYear3Page;