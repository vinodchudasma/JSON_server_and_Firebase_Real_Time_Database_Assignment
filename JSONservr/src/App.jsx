import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://localhost:5000/users";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setUsers(response.data))
  }, []);

  const addUser = () => {
    axios
      .post(API_URL, newUser)
      .then((response) => setUsers([...users, response.data]))
    setNewUser({ name: "", email: "" });
  };

  const updateUser = (id, updatedUser) => {
    axios
      .put(`${API_URL}/${id}`, updatedUser)
      .then((response) =>
        setUsers(users.map((user) => (user.id === id ? response.data : user)))
      )
  };

  const patchUser = (id, updatedField) => {
    axios
      .patch(`${API_URL}/${id}`, updatedField)
      .then((response) =>
        setUsers(users.map((user) => (user.id === id ? response.data : user)))
      )
  };

  const deleteUser = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="container mt-4 ">
      <h2 className="text-center text-primary mb-4">JSON Server CRUD App</h2>

      <div className="card p-3 mb-4 shadow">
        <div className="row g-2">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </div>
          <div className="col-md-5">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success w-100" onClick={addUser}>
              Add User
            </button>
          </div>
        </div>
      </div>

      {/* User List */}
      <div className="card p-3 shadow">
        <h4 className="text-center">User List</h4>
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="fw-bold">{user.name}</span>
              <span className="text-muted">{user.email}</span>
              <div>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => updateUser(user.id, { name: "Updated Name", email: user.email })}
                >
                  Edit
                </button>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => patchUser(user.id, { name: "Patched Name" })}
                >
                  Patch
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

