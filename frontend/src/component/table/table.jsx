import React from "react";
import "./table.css";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DataTablePage = (props) => {
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
                <td>{item.studentName}</td>
                <td>{item.registerNumber}</td>
                <td>
                  <button
                    className="update-button"
                    onClick={() => {
                      navigate(`/admin/studentUpdation/${item._id}`);
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

export default DataTablePage;
