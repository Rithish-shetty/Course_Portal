import React from "react";
import "../table/table.css";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Table2 = (props) => {
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <h1>{props.heading || "Student List"}</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>{props.name}</th>
            <th>{props.number}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(props.data) && props.data.length > 0 ? (
            props.data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.courseCode}</td>
                <td>
                  <button
                    className="update-button"
                    onClick={() => {
                      navigate(`/admin/courseUpdation/${item._id}`);
                    }}
                  >
                    <FaEdit /> Update
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
