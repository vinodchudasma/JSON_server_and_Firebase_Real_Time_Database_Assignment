import React, { useEffect, useState } from 'react'

function Home() {
  const [home, setHome]=useState([])
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setHome(data))
    },[])

    const delet = ((item)=>{
      const newHome = home.filter((_,xitem)=> item!==xitem)
      setHome(newHome)
    })

    return (
    <>
     <table class="table table-striped mt-4">
  <thead >
    <tr class="table-warning align-content-center">
      <th scope="col">Sr no</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Title</th>
      <th scope="col">creationAt</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      home.map((item,i)=>{
        return(
          <tr>
            <td>{i+1}</td>
            <td>{<img src={item.images} alt="" height={100} width={100} /> }</td>
            <td>{item.description}</td>
            <td>{item.title}</td>
            <td>{item.creationAt}</td>
            <td><button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZAhqs1bpOjguv07QB0JbSBgiwvDd4CHhSg&s" alt="" width={30} height={30} /></button></td>
            <td><button onClick={()=> delet(i)}><img src="https://www.clipartmax.com/png/middle/84-842915_delete-icon-png-red.png" alt="" width={30} height={30} /></button></td>

          </tr>
        )
      })
    }
  </tbody>
  
</table>
    </>
  )
}

export default Home
