import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../Reducer/Crud_Reducer";

const View = () => {
  const users = useSelector((state) => state.user_crud);
  console.log(users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <>
      <div>
        <Link to="/create" className="btn btn-info my-3">
          Create +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Organisation</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={index}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.address}</td>
                <td>{u.organisation}</td>
                <td>{u.role}</td>
                <td>
                  <Link
                    to={`/update/${u.id}`}
                    className="btn btn-sm bg-success text-white px-3 mx-3 "
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-sm bg-danger text-white"
                    onClick={() => handleDelete(u.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
