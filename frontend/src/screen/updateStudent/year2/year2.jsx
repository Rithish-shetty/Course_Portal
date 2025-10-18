import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Year from '../../../component/year/year';

const UpdateYear2Page = (props) => {

  return (
    <div >
      <Year yearName={"year2"} sem={"3 and 4"} />
    </div>
  );
};

export default UpdateYear2Page;