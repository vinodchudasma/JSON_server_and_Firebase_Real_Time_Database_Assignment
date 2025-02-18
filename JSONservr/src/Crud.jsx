import axios from "axios";
import React, { useEffect, useState } from "react";

function Crud() {
    const [data, setData] = useState([]); 
    const [userdata, setUserdata] = useState({
        name: "",
        age: "",
    });
    const [editId, setEditId] = useState(null); 

    
    useEffect(() => {
        axios
            .get("http://localhost:5000/users")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    
    const addUser = (e) => {
        e.preventDefault();

        if (editId) {
            axios
                .patch(`http://localhost:5000/users/${editId}`, userdata)
                .then((response) => {
                    setData(data.map((user) => (user.id === editId ? response.data : user)));
                    setUserdata({ name: "", age: "" }); 
                })
        } else {
            axios
                .post("http://localhost:5000/users", userdata)
                .then((response) => {
                    setData([...data, response.data]);
                    setUserdata({ name: "", age: "" });
                })
        }
    };

    const deldata = (id) => {
        axios
            .delete(`http://localhost:5000/users/${id}`)
            .then(() => {
                setData(data.filter((user) => user.id !== id));
            })
    };

    const editdata = (id) => {
        const userToEdit = data.find((user) => user.id === id);
        setUserdata(userToEdit);
        setEditId(id);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>CRUD App with JSON Server</h2>

            <form onSubmit={addUser}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={userdata.name}
                    onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
                    required
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Age"
                    value={userdata.age}
                    onChange={(e) => setUserdata({ ...userdata, age: e.target.value })}
                    required
                />
                <br /><br />

                <button type="submit">{editId ? "Update User" : "Add User"}</button>
            </form>

            <br />

            <table border="1" style={{ margin: "auto", width: "50%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <button
                                    onClick={() => deldata(item.id)}
                                    style={{ backgroundColor: "red", color: "white", marginRight: "5px" }}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => editdata(item.id)}
                                    style={{ backgroundColor: "blue", color: "white" }}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Crud;
