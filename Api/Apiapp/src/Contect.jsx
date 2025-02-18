import React, { useEffect, useState } from 'react';

function Contect() {
  const [contect, setContect] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setContect(data.users))
  }, []);

  const delet = ((item) => {
    const newcontect = contect.filter((_, xitem) => item !== xitem)
    setContect(newcontect)
  })

  return (
    <>
      <table className="table">
        <thead>
          <tr class="table-danger">
            <th scope="col">Sr No</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">BirthDate</th>
            <th scope="col">Blood Group</th>
            <th scope="col">Country</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {contect.map((item, index) => {
            return (
              <tr class="table-info">
                <td>{index + 1}</td>
                <td >{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.birthDate}</td>
                <td>{item.bloodGroup}</td>
                <td>{item.address.country}</td>
                <td><button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZAhqs1bpOjguv07QB0JbSBgiwvDd4CHhSg&s" alt="" width={30} height={30} /></button></td>
                <td><button onClick={() => delet(index)}><img src="https://www.clipartmax.com/png/middle/84-842915_delete-icon-png-red.png" alt="" width={30} height={30} /></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Contect;
